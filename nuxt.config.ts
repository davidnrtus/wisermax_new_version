// https://nuxt.com/docs/api/configuration/nuxt-config
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
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],

  app: {
    head: {
      title: 'WISERMAX HN',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo1.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap',
        },
        { rel: 'stylesheet', href: 'https://use.typekit.net/dbl6act.css' },
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

  i18n: {
    restructureDir: false,
    locales: [
      { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'cn', file: 'cn-CN.js', name: 'Chinese' },
      { code: 'ko', file: 'ko-KO.js', name: 'Korean' },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
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
    },
  },

  elementPlus: {
    importStyle: 'css',
  },
})
