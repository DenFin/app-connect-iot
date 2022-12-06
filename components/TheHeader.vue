<template>
  <header class='bg-black min-h-12 flex items-center'>
    <BegaContainer is-centered is-extended>
      <div class='flex justify-between'>
        <BegaLogo to='/dashboard' icon='BegaConnectLogo' icon-classes='bg-white fill-white w-36' data-testid='connect-logo' :has-dark-background='true' />
        <div class='flex items-center'>
          <p class='text-white mr-12'>{{ welcomeMessage }}</p>
          <BegaButton v-if="session" @click="signOut()" class='border-primary border text-primary hover:bg-primary hover:text-white hover:opacity-100 font-light' text='Abmelden'  />
          <BegaButton v-else @click="signIn('begaid', { callbackUrl: '/dashboard' })" class='border-primary border text-primary hover:bg-primary hover:text-white hover:opacity-100 font-light' text='Anmelden'  />
        </div>
      </div>
    </BegaContainer>
  </header>
</template>

<script setup lang='ts'>
import { BegaContainer, BegaButton, BegaLogo } from '@kernpunkt/bega-component-library'

const { signIn, signOut, getSession } = useSession()
const session = await getSession()

const { t } = useI18n()
const welcomeMessage = computed(() => {
  return `${ t('welcome')} ${session?.user?.name}`
})

</script>
