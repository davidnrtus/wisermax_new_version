// Cloudflare Pages Function — POST /api/rfq
// Receives the tech-pack request form (components/home/RfqSection.vue) and
// forwards it to the merchandising inbox through Resend.
//
// Environment variables (Cloudflare Pages → Settings → Variables and Secrets):
//   RESEND_API_KEY  secret, required
//   RFQ_FROM        sender on a domain verified in Resend,
//                   e.g. "Wisermax HN <rfq@wisermaxhn.com>"
//   RFQ_TO          comma-separated recipients (default: ship@wiser.vn)
//   TURNSTILE_SECRET  secret, optional — when set, every request must carry a
//                   valid Cloudflare Turnstile token (pair it with the build
//                   variable NUXT_PUBLIC_TURNSTILE_SITE_KEY)

interface Env {
  RESEND_API_KEY?: string
  RFQ_FROM?: string
  RFQ_TO?: string
  TURNSTILE_SECRET?: string
}

interface Context {
  request: Request
  env: Env
}

const LIMITS = { name: 120, company: 160, email: 200, qty: 160, msg: 5000 }
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LINK = /https?:\/\/|www\./gi
// Nobody fills in the form this fast; scripts do.
const MIN_FILL_MS = 3000
const MAX_LINKS = 3

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function countLinks(s: string) {
  return s.match(LINK)?.length ?? 0
}

async function verifyTurnstile(secret: string, token: string, ip: string | null) {
  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token)
  if (ip) body.append('remoteip', ip)
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    })
    const out = (await res.json()) as { success?: boolean }
    return out.success === true
  } catch (err) {
    console.error('rfq: turnstile verify failed', err)
    return false
  }
}

export async function onRequestPost({ request, env }: Context) {
  // Only accept posts from the site itself. An unparseable origin (e.g. the
  // literal "null" sent from sandboxed frames) counts as foreign.
  const origin = request.headers.get('origin')
  if (origin) {
    let host = ''
    try {
      host = new URL(origin).host
    } catch {}
    if (host !== new URL(request.url).host) {
      return json(403, { ok: false, error: 'forbidden' })
    }
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return json(400, { ok: false, error: 'invalid_body' })
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so
  // bots don't learn to skip it.
  if (clean(data.website, 200)) return json(200, { ok: true })

  // The form reports how long it was open before submit. Missing or too
  // short means a script posted it; drop it the same quiet way.
  const elapsed = typeof data.elapsed === 'number' ? data.elapsed : 0
  if (elapsed < MIN_FILL_MS) {
    console.log('rfq: dropped, filled in', elapsed, 'ms')
    return json(200, { ok: true })
  }

  const form = {
    name: clean(data.name, LIMITS.name),
    company: clean(data.company, LIMITS.company),
    email: clean(data.email, LIMITS.email),
    qty: clean(data.qty, LIMITS.qty),
    msg: clean(data.msg, LIMITS.msg),
  }

  if (!form.name || !form.email || !form.msg) {
    return json(422, { ok: false, error: 'missing_fields' })
  }
  if (!EMAIL.test(form.email)) {
    return json(422, { ok: false, error: 'invalid_email' })
  }

  // Links in a name or company field are link spam, never a buyer.
  if (countLinks(form.name) || countLinks(form.company)) {
    console.log('rfq: dropped, link in name/company')
    return json(200, { ok: true })
  }
  if (countLinks(form.msg) > MAX_LINKS) {
    return json(422, { ok: false, error: 'too_many_links' })
  }

  if (env.TURNSTILE_SECRET) {
    const token = clean(data.token, 2048)
    const ip = request.headers.get('cf-connecting-ip')
    if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET, token, ip))) {
      return json(403, { ok: false, error: 'captcha_failed' })
    }
  }

  if (!env.RESEND_API_KEY || !env.RFQ_FROM) {
    console.error('rfq: RESEND_API_KEY or RFQ_FROM is not set')
    return json(500, { ok: false, error: 'not_configured' })
  }

  const to = (env.RFQ_TO || 'ship@wiser.vn')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  const rows: [string, string][] = [
    ['Name', form.name],
    ['Company', form.company || '—'],
    ['Work email', form.email],
    ['Estimated quantity', form.qty || '—'],
  ]

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), '', form.msg].join('\n')
  const html = `
    <table cellpadding="6" style="font:14px/1.5 -apple-system,Segoe UI,Arial,sans-serif;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="color:#7A7368">${k}</td><td>${escapeHtml(v)}</td></tr>`).join('')}
    </table>
    <p style="font:14px/1.6 -apple-system,Segoe UI,Arial,sans-serif;white-space:pre-wrap">${escapeHtml(form.msg)}</p>
    <p style="font:12px -apple-system,Segoe UI,Arial,sans-serif;color:#7A7368">Sent from the request form on wisermaxhn.com — reply to answer the buyer directly.</p>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RFQ_FROM,
      to,
      reply_to: form.email,
      subject: `Tech pack request — ${form.company || form.name}`,
      text,
      html,
    }),
  })

  if (!res.ok) {
    console.error('rfq: resend failed', res.status, await res.text())
    return json(502, { ok: false, error: 'send_failed' })
  }

  return json(200, { ok: true })
}
