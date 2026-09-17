// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://www.wisermaxhn.com'
const SITE_NAME = 'Wisermax HN'
const DEFAULT_TITLE = 'WISERMAX HN — Garment manufacturer & ODM atelier, Hanoi'
const DEFAULT_DESCRIPTION = 'A Vietnam apparel manufacturer in Hanoi producing knitwear, woven, outerwear and sportswear for US and EU brands. Full package OEM, ODM and private label — FOB Hai Phong.'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-15',
  devtools: { enabled: true },
  ssr: true,

  components: [
    { path: '~/components/common', prefix: 'Tu' },
    { path: '~/components/home', prefix: 'Tu' },
    { path: '~/components/about', prefix: 'Tu' },
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@element-plus/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  site: {
    url: SITE_URL,
    name: SITE_NAME,
  },

  app: {
    head: {
      title: DEFAULT_TITLE,
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: DEFAULT_DESCRIPTION },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Wiser Max HN Company Limited' },
        { name: 'theme-color', content: '#F5F1E6' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: DEFAULT_TITLE },
        { property: 'og:description', content: DEFAULT_DESCRIPTION },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: DEFAULT_TITLE },
        { name: 'twitter:description', content: DEFAULT_DESCRIPTION },
        { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo1.svg' },
        { rel: 'canonical', href: SITE_URL },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Wisermax HN',
            legalName: 'Wiser Max HN Company Limited',
            url: SITE_URL,
            logo: `${SITE_URL}/logo1.svg`,
            foundingDate: '2014',
            founders: [{ '@type': 'Person', name: 'Wiser Max HN' }],
            description: DEFAULT_DESCRIPTION,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Trau Quy Ward, Gia Lam District',
              addressLocality: 'Hanoi',
              addressCountry: 'VN',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+84-974-806625',
                contactType: 'sales',
                email: 'info@wiser.vn',
                availableLanguage: ['English', 'Vietnamese'],
                areaServed: ['US', 'CA', 'EU', 'KR'],
              },
            ],
            sameAs: [],
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'OEM garment manufacturing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'ODM apparel manufacturing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Private label clothing manufacturing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'FOB sportswear manufacturing' } },
            ],
          }),
        },
      ],
    },
  },

  css: [
    '~/assets/css/global.scss',
    '~/assets/css/animations.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/variables.scss" as *;\n',
          silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
        },
      },
    },
  },

  image: {
    dir: 'assets/images',
  },

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        'https://wisermax-mailserver.herokuapp.com',
      siteUrl: SITE_URL,
    },
  },

  elementPlus: {
    importStyle: 'css',
  },

  // ---- SEO modules ----
  sitemap: {
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/about-us', priority: 0.8, changefreq: 'monthly' },
      { loc: '/products', priority: 0.9, changefreq: 'weekly' },
      { loc: '/products/men', priority: 0.8, changefreq: 'monthly' },
      { loc: '/products/women', priority: 0.8, changefreq: 'monthly' },
      { loc: '/products/kids', priority: 0.8, changefreq: 'monthly' },
      { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
    ],
  },

  robots: {
    allow: '/',
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about-us', '/products', '/products/men', '/products/women', '/products/kids', '/contact'],
    },
  },
})
