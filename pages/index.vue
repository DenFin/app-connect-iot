<template>
    <div class="m-4">
      <BegaContainer>
        <BegaHeadline type='h1' text='Startseite' />
        <p>Keine Anmeldung erforderlich</p>
      </BegaContainer>
    </div>
  </template>

  <script setup lang="ts">
  import { BegaContainer, BegaHeadline } from '@kernpunkt/bega-component-library'

  definePageMeta({ auth: false })
  </script>
