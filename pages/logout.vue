<template>
  <div>
    You should never see this page
  </div>
</template>

<script setup lang='ts'>
// https://github.com/nuxt/framework/issues/6414
// if not restrict to client side it will throw this
/*
Error: nuxt instance unavailable                                                                                                                                                                                                                                                                           22:53:50
    at Module.useNuxtApp (/Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/nuxt@3.0.0_gkfhwjwekqegzmf4uq3kswg7qa/node_modules/nuxt/dist/app/nuxt.mjs:165:13)
    at Module.useRequestEvent (/Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/nuxt@3.0.0_gkfhwjwekqegzmf4uq3kswg7qa/node_modules/nuxt/dist/app/composables/ssr.mjs:14:58)
    at Module.getRequestURL (/Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/@sidebase+nuxt-auth@0.3.0_ygygdivumlyky5zd4bq5d5a4pm/node_modules/@sidebase/nuxt-auth/dist/runtime/utils/url.mjs:13:99)
    at signOut (/Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/@sidebase+nuxt-auth@0.3.0_ygygdivumlyky5zd4bq5d5a4pm/node_modules/@sidebase/nuxt-auth/dist/runtime/composables/useSession.mjs:126:53)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async /Users/Olle/workspace_java/de.bega/app-connect-iot/middleware/logout.ts:9:124
    at async Object.callAsync (file:///Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/unctx@2.1.0/node_modules/unctx/dist/index.mjs:53:16)
    at async /Users/Olle/workspace_java/de.bega/app-connect-iot/node_modules/.pnpm/nuxt@3.0.0_gkfhwjwekqegzmf4uq3kswg7qa/node_modules/nuxt/dist/pages/runtime/router.mjs:110:22

 */
definePageMeta({
  middleware: process.client ? 'logout' : undefined
})
</script>
