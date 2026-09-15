// @nuxtjs/i18n v9 stops exposing localePath/switchLocalePath/localeRoute directly on
// Options API component instances. This plugin registers them as global properties
// so existing templates using `localePath(...)`/`switchLocalePath(...)` keep working.
export default defineNuxtPlugin((nuxtApp) => {
  // Composables auto-imported by Nuxt in plugin context
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()
  const localeRoute = useLocaleRoute()

  nuxtApp.vueApp.mixin({
    methods: {
      localePath,
      switchLocalePath,
      localeRoute,
    },
  })
})
