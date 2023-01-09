import de from './i18n/de.json'
import en from './i18n/en.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    api: {
      iot: {
        endpoints: {
          systems: `${process.env.CONNECT_IOT_API_BASE}/systems`,
          // @ts-ignore
          scenes: (systemId: string) =>
            `${process.env.CONNECT_IOT_API_BASE}/systems/${systemId}/scenes`,
          // scenes: (systemId: string) => `${process.env.CONNECT_IOT_API_BASE}/systems/${systemId}/scenes`,
          // gears: (systemId: string) => { return `${process.env.CONNECT_IOT_API_BASE}/systems/${systemId}/gears`},
          // automations: (systemId: string) => { return `${process.env.CONNECT_IOT_API_BASE}/systems/${systemId}/automations`},
          // colors: (systemId: string) => { return `${process.env.CONNECT_IOT_API_BASE}/systems/${systemId}/colors`}
        },
      },
    },
    server: {
      api: {
        logout: process.env.AUTH_LOGOUT,
      },
    },
    CONNECT_IOT_API_BASE: process.env.CONNECT_IOT_API_BASE,
    NEXTAUTH_JWT_SECRET: process.env.NEXTAUTH_JWT_SECRET,
    public: {
      BEGA_ID_ENDPOINT_BASE: process.env.BEGA_ID_ENDPOINT_BASE,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    enableGlobalAppMiddleware: true,
    basePath: '/api/auth',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
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
