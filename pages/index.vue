<template>
  <div class='m-4'>
    <BegaLogo icon='BegaConnectLogo' data-testid='connect-logo' />
    <h1>Welcome to BEGA Connect</h1>
  </div>
</template>

<script setup lang='ts'>
import { BegaLogo } from '@kernpunkt/bega-component-library'

definePageMeta({ auth: false })
</script>
