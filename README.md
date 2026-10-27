# wisermax-client

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Request form (`/api/rfq`)

The tech-pack form in `components/home/RfqSection.vue` posts to a Cloudflare
Pages Function, `functions/api/rfq.ts`, which emails the request through
[Resend](https://resend.com). It only runs on Cloudflare Pages — not on Vercel
or `nuxt preview`. If the endpoint fails, the form offers a prefilled `mailto:`
link instead.

Set these in Cloudflare Pages → Settings → Variables and Secrets:

| Variable         | Required | Example                                   |
| ---------------- | -------- | ----------------------------------------- |
| `RESEND_API_KEY` | yes (secret) | `re_…`                                |
| `RFQ_FROM`       | yes      | `Wisermax HN <rfq@wisermaxhn.com>` (domain verified in Resend) |
| `RFQ_TO`         | no       | `ship@wiser.vn` (default; comma-separate for more) |
| `TURNSTILE_SECRET` | no (secret) | Turnstile secret key; turns on the captcha check |
| `NUXT_PUBLIC_TURNSTILE_SITE_KEY` | no (build) | Turnstile site key; set together with the secret |

Cloudflare Pages build settings: build command `yarn generate`, output
directory `.output/public`. The `functions/` folder at the repo root is picked
up automatically.

### Spam protection

- **Honeypot** field and a **fill-time check** (posts sent within 3s of the
  form opening) — dropped with a fake success so bots learn nothing.
- **Links**: any link in name/company is dropped; more than 3 links in the
  brief is refused.
- **Cloudflare Turnstile** (Cloudflare → Turnstile → Add widget, domain
  `wisermaxhn.com`, mode *Managed*). Put the site key in
  `NUXT_PUBLIC_TURNSTILE_SITE_KEY` (a build variable — redeploy after
  changing it) and the secret in `TURNSTILE_SECRET`. Leave both empty to
  turn it off. The script only loads when someone focuses the form.
- **Rate limit per IP**: once the domain runs through Cloudflare, add a WAF
  rate-limiting rule for `/api/rfq` (e.g. 5 requests / 10 min per IP).

Local test with the function (put secrets in `.dev.vars`, which is git-ignored):

```bash
yarn generate
npx wrangler pages dev .output/public
```

Cloudflare's Turnstile test keys work on localhost: site key
`1x00000000000000000000AA` with secret `1x0000000000000000000000000000000AA`
(always passes) or `2x0000000000000000000000000000000AA` (always fails).
