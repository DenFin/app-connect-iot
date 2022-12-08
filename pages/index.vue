<template>
    <div class="m-4">
      <BegaLogo icon="BegaConnectLogo" data-testid="connect-logo" />
      <div>
        <form>
          <select v-model="$i18n.locale">
            <option value="en">en</option>
            <option value="de">de</option>
          </select>
          <p>{{ $t('welcome') }}</p>
        </form>
      </div>
      <p>TEST</p>

      <!-- <div v-if="session">
        Signed in as {{ session?.user?.email }} <br />
        <button @click="signOut()">Sign out</button>
      </div>
      <div v-else>
        Not signed in <br />
        <button @click="signIn('begaid', { callbackUrl: '/dashboard' })">Sign in</button>
      </div> -->
    </div>
  </template>

  <script setup lang="ts">
  import { BegaLogo } from '@kernpunkt/bega-component-library'

//   const { data: session, signIn, signOut } = useSession()
  definePageMeta({ auth: false })

  </script>
