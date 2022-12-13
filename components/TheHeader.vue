<template>
  <header class="bg-black min-h-12 flex items-center">
    <BegaContainer is-centered is-extended>
      <div class="flex justify-between">
        <BegaLogo
          to="/dashboard"
          icon="BegaConnectLogo"
          icon-classes="w-36"
          data-testid="connect-logo"
          :has-dark-background="true"
        />
        <div class="flex items-center">
          <div v-if="!isEmptyObject(session)" class="flex items-center mr-12">
            <p data-testid="welcome-message" class="text-white mr-3">
              {{ welcomeMessage }}
            </p>
            <BegaIcon
              class="fill-white w-4 h-4 cursor-pointer hover:stroke-white"
              icon="UserareaIcon"
            />
          </div>
          <BegaButton
            v-if="!isEmptyObject(session)"
            @click="signOut()"
            icon="LogoutIcon"
            data-testid="btn-logout-header"
            class="border-primary border text-primary hover:bg-primary hover:text-white hover:opacity-100 font-light"
            text="Abmelden"
          />
          <BegaButton
            v-else
            @click="signIn('bega', { callbackUrl: '/dashboard' })"
            data-testid="btn-login-header"
            icon="LogoutIcon"
            class="border-primary border text-primary hover:bg-primary hover:text-white hover:opacity-100 font-light"
            text="Anmelden"
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
import { useI18n, useSession } from '#imports'
import { isEmptyObject } from '~/utils/objectHelpers'

const { signIn, signOut, getSession } = useSession()
const session = await getSession()

const { t } = useI18n()
const welcomeMessage = computed(() => {
  return `${t('welcome')} ${session?.user?.name}`
})
</script>
