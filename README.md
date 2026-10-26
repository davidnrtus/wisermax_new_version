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

Cloudflare Pages build settings: build command `yarn generate`, output
directory `.output/public`. The `functions/` folder at the repo root is picked
up automatically.

Local test with the function:

```bash
yarn generate
npx wrangler pages dev .output/public --binding RESEND_API_KEY=re_xxx --binding "RFQ_FROM=Wisermax HN <rfq@wisermaxhn.com>"
```
