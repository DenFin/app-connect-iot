<template>
  <BegaContainer is-centered>
    <div class='m-4'>
      <div v-if="!isEmptyObject(session)">
        <BegaHeadline type='h1' :text="$t('my-systems')" />
        {{ $t('signed-in-as') }} {{ session?.user?.email }} <br />
        <button @click='signOut()'>{{ $t('sign-out')}}</button>
      </div>
      <div v-else>
        Not signed in <br />
        <!-- die callbackUrl hier zu überschreiben geht nicht... falscher spread operartor glaube ich, https://github.com/sidebase/nuxt-auth/blob/main/src/runtime/composables/useSession.ts#L118 -->
        <button @click="signIn('bega', { callbackUrl: '/dashboard', redirect: true })">{{  $t('sign-in') }}</button>
      </div>
    </div>
    <code>
      <h1>Auth Strategy:</h1>
      <pre>Status: {{ status }}</pre>
      <pre>Session: {{ session || 'no session data present, are you logged in?' }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
      <pre>Decoded JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
      <pre>CSRF Token: {{ csrfToken }}</pre>
      <pre>Providers: {{ providers }}</pre>
      <pre>ITS UserInfo Data: {{userInfoData}}</pre>
      <pre>Discovery API Systems: {{systems}}</pre>
      <pre>Discovery API Scenes: {{scenes}}</pre>
      <p>The page content of "{{ route.path }}"</p>s
    </code>
  </BegaContainer>
</template>

<script setup lang='ts'>
import { BegaContainer, BegaHeadline } from '@kernpunkt/bega-component-library'
import { isEmptyObject } from '~/utils/objectHelpers'

definePageMeta({ auth: false })

const { status, signIn, signOut, lastRefreshedAt, getProviders, getCsrfToken, getSession } = useSession()
const config = useRuntimeConfig()

const providers = await getProviders()
const csrfToken = await getCsrfToken()
const session = await getSession()

const headers = useRequestHeaders(['cookie'])
const { data: token } = await useFetch('/api/token', { headers: { cookie: headers.cookie || '' } })
const { data: systems } = await useFetch('/api/discovery/systems', { headers: { cookie: headers.cookie || '' } })
const { data: scenes } = await useFetch('/api/discovery/scenes', { headers: { cookie: headers.cookie || '' } })

const userInfoData = await useFetch(`${config.public.BEGA_ID_ENDPOINT_BASE}/connect/userinfo`, {
  headers: {
    'Authorization': 'Bearer ' + token.value?.access_token,
  },
})

const route = useRoute()
</script>
