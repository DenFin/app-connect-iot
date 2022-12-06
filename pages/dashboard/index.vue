<template>
  <BegaContainer is-centered>
    <div class='m-4'>
      <div v-if='session'>
        Signed in as {{ session?.user?.email }} <br />
        <button @click='signOut()'>Sign out</button>
      </div>
      <div v-else>
        Not signed in <br />
        <!-- die callbackUrl hier zu überschreiben geht nicht... falscher spread operartor glaube ich, https://github.com/sidebase/nuxt-auth/blob/main/src/runtime/composables/useSession.ts#L118 -->
        <button @click="signIn('bega', { callbackUrl: '/dashboard', redirect: true })">Sign in</button>
      </div>
    </div>
  </BegaContainer>
</template>

<script setup lang='ts'>
import { BegaContainer } from '@kernpunkt/bega-component-library'

const { data: session, signIn, signOut } = useSession()
definePageMeta({ auth: false })
</script>
