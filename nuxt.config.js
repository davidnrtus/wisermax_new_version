export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WISERMAX HN',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo1.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/dbl6act.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/variables.scss',
    '~/assets/css/global.scss',
    '~/assets/css/animations.scss',
  ],
  styleResources: {
    scss: ['~/assets/css/variables.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/tu-components'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'cn',
        file: 'cn-CN.js',
        name: 'Chinese',
      },
      {
        code: 'ko',
        file: 'ko-KO.js',
        name: 'Korean',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  image: {
    dir: 'assets/images',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://wisermax-mailserver.herokuapp.com',
    proxyHeaders: false,
    credentials: false,
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
