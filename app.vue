<template>
  <NuxtLayout>
    <BegaContainer is-centered data-testid='app-content'>
      <div v-if="!isEmptyObject(session)">
        <NuxtPage/>
      </div>
      <div v-else>
        Not signed in <br/>
        <button @click="signIn('bega', { callbackUrl: '/systems', redirect: true })">{{ $t('sign-in') }}</button>
      </div>
      <div class='p-4'>
        <div>
          <form>
            <select v-model='$i18n.locale' class="text-black">
              <option value='en'>en</option>
              <option value='de'>de</option>
            </select>
            <p>{{ $t('welcome') }}</p>
          </form>
        </div>
        <div>
          <BegaButton :text="store.isTestData? 'Use Api': 'Use Testdata'" @click="store.changeDataInput()"/>
          <span>{{ store.isTestData }}</span>
        </div>
      </div>
    </BegaContainer>
  </NuxtLayout>
</template>

<script setup lang='ts'>
import {BegaContainer, BegaButton} from '@kernpunkt/bega-component-library'
import {isEmptyObject} from '~/utils/objectHelpers'
import {useTestStore} from "~/store/test.store";

const store = useTestStore()
const {signIn, getSession} = useSession()
const session = await getSession()
</script>

