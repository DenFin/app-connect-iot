<template>
  <header class="bg-black min-h-12 flex items-center bg-black">
    <BegaContainer is-centered is-extended>
      <div class="flex justify-between">
        <BegaLogo
          to="/dashboard"
          icon="BegaConnectLogo"
          icon-classes="w-36"
          data-testid="connect-logo"
          :type='isType'
          :has-dark-background="true"
        />
        <div class="flex items-center">
          <div v-if="!isEmptyObject(session)" class="mr-12 flex items-center">
            <p data-testid="welcome-message" class="mr-3 text-white">
              {{ welcomeMessage }}
            </p>
            <BegaIcon
              class="h-4 w-4 cursor-pointer fill-white hover:stroke-white"
              icon="UserareaIcon"
            />
          </div>
          <BegaButton
            v-if="!isEmptyObject(session)"
            icon="LogoutIcon"
            data-testid="btn-logout-header"
            class="border-primary text-primary hover:bg-primary border font-light hover:text-white hover:opacity-100"
            :text="$t('sign-out')"
            @click="signOut({ callbackUrl: '/' })"
          />
          <BegaButton
            v-else
            data-testid="btn-login-header"
            icon="LogoutIcon"
            class="border-primary text-primary hover:bg-primary border font-light hover:text-white hover:opacity-100"
            :text="$t('sign-in')"
            @click="signIn('bega', { callbackUrl: '/dashboard' })"
          />
        </div>
      </div>
    </BegaContainer>
  </header>
</template>

<script setup lang="ts">
import {
  BegaContainer,
  BegaButton,
  BegaIcon,
  BegaLogo,
} from '@kernpunkt/bega-component-library'
import { ConcreteComponent } from 'vue'
import { useI18n, useSession } from '#imports'
import { isEmptyObject } from '~/utils/objectHelpers'

const { signIn, signOut, getSession } = useSession()
const session = await getSession()

const { t } = useI18n()
const welcomeMessage = computed(() => {
  return `${t('welcome')} ${session?.user?.name}`
})

const isType = computed<ConcreteComponent | string>(() => {
  return resolveComponent('nuxt-link')
})

</script>
