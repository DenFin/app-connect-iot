<template>
  <header class='min-h-12 flex items-center sticky top-0 bg-secondary w-full z-50'>
    <BegaContainer is-centered is-extended>
      <div class='flex justify-between'>
        <BegaLogo
          :to="!isEmptyObject(session)? '/systems' : '/'"
          icon='BegaConnectLogo'
          icon-classes='w-36'
          data-testid='connect-logo'
          :type='isType'
          :has-dark-background='true'
        />
        <div class='flex items-center'>
          <div v-if='!isEmptyObject(session)' class='md:mr-12 flex items-center'>
            <p data-testid='welcome-message' class='mr-3 mt-2 text-white hidden md:block'>
              {{ welcomeMessage }}
            </p>
            <BegaIcon
              class='h-4 w-4 cursor-pointer fill-white hover:stroke-white'
              icon='UserareaIcon'
            />
          </div>
          <BegaButton
            v-if='!isEmptyObject(session)'
            icon='LogoutIcon'
            data-testid='btn-logout-header'
            class='bg-secondary  hidden md:block p-2 border-primary text-primary hover:bg-primary border font-light hover:text-white hover:opacity-100'
            :text="$t('sign-out')"
            @click='federateSignOut()'
          />
          <BegaButton
            v-else
            data-testid='btn-login-header'
            icon='LogoutIcon'
            class='bg-secondary hidden md:block p-2 border-primary text-primary hover:bg-primary border font-light hover:text-white hover:opacity-100'
            :text="$t('sign-in')"
            @click="signIn('bega', { callbackUrl: '/systems' })"
          />
        </div>
      </div>
    </BegaContainer>
  </header>
</template>

<script setup lang='ts'>
import {
  BegaContainer,
  BegaButton,
  BegaIcon,
  BegaLogo,
} from '@kernpunkt/bega-component-library'
import { ConcreteComponent } from 'vue'
import { useI18n, useSession } from '#imports'
import { isEmptyObject } from '~/utils/objectHelpers'

const { signIn, getSession } = useSession()
const session = await getSession()

const { t } = useI18n()
const welcomeMessage = computed(() => {
  return `${t('welcome')} ${session?.user?.name}`
})

const isType = computed<ConcreteComponent | string>(() => {
  return resolveComponent('nuxt-link')
})

/**
 * Collection the endsession-endpoint of the identity provider (ITS) to federate the signout
 *
 * Hint: This starts the signOut Prozess:
 * 1. SignOut from IdentityProvider
 * 2. SignOut from Client Session
 *
 * @link https://identityserver4.readthedocs.io/en/latest/topics/signout_federated.html
 * @link https://identityserver4.readthedocs.io/en/latest/endpoints/endsession.html
 */
async function federateSignOut(): Promise<void> {
  const headers = useRequestHeaders(['cookie'])
  const { data: logoutUrl } = await useFetch('/api/auth/logout', { headers: { cookie: headers.cookie || '' } })
  window.location.replace(logoutUrl?.value || '/')
}
</script>
