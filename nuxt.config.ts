import de from './i18n/de.json'
import en from './i18n/en.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  // .pnpm-store needs to be ignored due to file watcher chokidar overflow in ci-pipeline see developer handbook (https://link-needs-to-be-udpated)
  ignore: ['.pnpm-store'],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'de',
      fallbackLocale: 'en',
      messages: {
        de,
        en,
      },
    },
  },
})
