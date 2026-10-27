<template>
  <section id="rfq" class="band rfq">
    <div class="wrap split">
      <div v-reveal:left>
        <h2>Send us your tech pack</h2>
        <p class="lede">
          Attach a tech pack, sketch or reference garment. A merchandiser replies within one working
          day with questions or a costing timeline.
        </p>
        <div class="direct">
          <p>Prefer email? <a :href="`mailto:${info.email_primary}`">{{ info.email_primary }}</a></p>
          <p>WhatsApp / phone: <a :href="`tel:${info.phone_href}`">{{ info.phone }}</a></p>
          <p class="addr">{{ info.company_name }}, {{ info.street }}, {{ info.city }}, {{ info.country }}</p>
        </div>
      </div>

      <form v-reveal:right="1" novalidate @submit.prevent="submit" @focusin.once="initCaptcha">
        <label>
          Name
          <input v-model.trim="form.name" type="text" name="name" autocomplete="name" required>
        </label>
        <label>
          Company
          <input v-model.trim="form.company" type="text" name="company" autocomplete="organization">
        </label>
        <label>
          Work email
          <input v-model.trim="form.email" type="email" name="email" autocomplete="email" required>
        </label>
        <label>
          Estimated quantity
          <input v-model.trim="form.qty" type="text" name="qty" placeholder="e.g. 3,000 pcs / 4 styles">
        </label>
        <label class="full">
          Tell us about the program
          <textarea
            v-model.trim="form.msg"
            name="msg"
            placeholder="Category, fabric, target FOB, delivery window…"
            required
          />
        </label>

        <!-- Honeypot: hidden from people, filled in by bots. -->
        <label class="hp" aria-hidden="true">
          Website
          <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
        </label>

        <!-- Turnstile stays invisible unless Cloudflare wants a click. -->
        <div v-if="siteKey" ref="captchaEl" class="captcha" />

        <p v-if="error" class="err" role="alert">
          {{ error }}
          <template v-if="failed">
            <a :href="mailtoHref">Email it to {{ info.email_primary }} instead</a>.
          </template>
        </p>

        <button class="btn" type="submit" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send tech pack' }}
        </button>

        <p class="note" :class="{ ok: status === 'sent' }" aria-live="polite">
          {{ status === 'sent'
            ? 'Thank you — your request is with our merchandisers. We reply from ' + info.email_primary + ' within one working day; send the tech pack files in reply to that email.'
            : 'A merchandiser replies from ' + info.email_primary + ' within one working day. Tech pack files can go in your reply.' }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import info from '@/data/info'

const empty = { name: '', company: '', email: '', qty: '', msg: '', website: '' }
const form = reactive({ ...empty })
const error = ref('')
const failed = ref(false)
const status = ref('idle') // idle | sending | sent

// Sent with the form so the server can drop instant, scripted posts.
let openedAt = 0
onMounted(() => { openedAt = Date.now() })

// Cloudflare Turnstile. The script loads on the first focus inside the form,
// so it costs nothing for visitors who never touch it.
const siteKey = useRuntimeConfig().public.turnstileSiteKey
const captchaEl = ref(null)
let widgetId = null
let token = ''
let waiting = []

function renderCaptcha() {
  if (!captchaEl.value || widgetId !== null) return
  widgetId = window.turnstile.render(captchaEl.value, {
    sitekey: siteKey,
    theme: 'light',
    size: 'flexible',
    appearance: 'interaction-only',
    callback: (t) => {
      token = t
      waiting.splice(0).forEach((resolve) => resolve(t))
    },
    'expired-callback': () => { token = '' },
    'error-callback': () => { token = '' },
  })
}

function initCaptcha() {
  if (!siteKey || widgetId !== null) return
  if (window.turnstile) return renderCaptcha()
  window.onTurnstileLoad = renderCaptcha
  if (document.getElementById('cf-turnstile')) return
  const s = document.createElement('script')
  s.id = 'cf-turnstile'
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'
  s.async = true
  document.head.appendChild(s)
}

function captchaToken() {
  if (!siteKey) return Promise.resolve('')
  if (token) return Promise.resolve(token)
  initCaptcha()
  return new Promise((resolve, reject) => {
    waiting.push(resolve)
    setTimeout(() => reject(new Error('captcha timeout')), 10000)
  })
}

// Tokens are single use.
function resetCaptcha() {
  token = ''
  if (widgetId !== null) window.turnstile?.reset(widgetId)
}

onBeforeUnmount(() => {
  if (widgetId !== null) window.turnstile?.remove(widgetId)
  waiting = []
})

// Fallback when the endpoint is down: the same details as a prefilled email.
const mailtoHref = computed(() => {
  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company || '—'}`,
    `Work email: ${form.email}`,
    `Estimated quantity: ${form.qty || '—'}`,
    '',
    form.msg,
  ].join('\n')
  const subject = `Tech pack — ${form.company || form.name}`
  return `mailto:${info.email_primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

// Posts to the Cloudflare Pages Function in functions/api/rfq.ts.
async function submit() {
  failed.value = false
  if (!form.name || !form.email || !form.msg) {
    error.value = 'Name, work email and a short brief are required.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = 'That work email does not look right.'
    return
  }
  error.value = ''
  status.value = 'sending'

  try {
    const body = { ...form, token: await captchaToken(), elapsed: Date.now() - openedAt }
    // Give up after 15s so a stalled mail API falls back to the mailto link.
    await $fetch('/api/rfq', { method: 'POST', body, timeout: 15000 })
    Object.assign(form, empty)
    status.value = 'sent'
  } catch (err) {
    status.value = 'idle'
    if (err?.data?.error === 'too_many_links') {
      error.value = 'Please keep it to three links or fewer — files and references can go in your reply to our email.'
    } else {
      failed.value = true
      error.value = 'Sorry, the form could not be sent just now.'
    }
  } finally {
    resetCaptcha()
  }
}
</script>

<style lang="scss" scoped>
.rfq :deep(.split) { align-items: start; }

.direct {
  margin-top: 40px;
  border-top: 1px solid var(--rule);
  padding-top: 24px;
  font-size: 15px;
  color: #3a3e44;

  p { margin: 0 0 8px; }
  p.addr { margin: 0; }
  a { border-bottom: 1px solid var(--ink); }
  a:hover { color: var(--indigo); border-bottom-color: var(--indigo); }
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

label {
  display: grid;
  gap: 6px;
  font-size: 14px;
  color: #3a3e44;
}

label.full { grid-column: 1 / -1; }

input,
textarea {
  font: inherit;
  font-size: 15px;
  padding: 13px 14px;
  border: 1px solid var(--rule);
  background: #fff;
  border-radius: 2px;
  color: var(--ink);
}

textarea { min-height: 120px; resize: vertical; }

.err {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 14px;
  color: var(--selvedge);
}

form .btn {
  grid-column: 1 / -1;
  justify-self: start;
  margin-top: 6px;
}

.err a { border-bottom: 1px solid currentColor; }

.captcha { grid-column: 1 / -1; }

.hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

form .btn[disabled] { opacity: .6; cursor: progress; }

.note {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 13px;
  color: var(--thread);

  &.ok { color: var(--ink); font-size: 14px; }
}

@media (max-width: 820px) {
  form { grid-template-columns: 1fr; }
  label.full,
  form .btn { grid-column: auto; }
}
</style>
