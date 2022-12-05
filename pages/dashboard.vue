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
    </div>  
</template>
  
  <script setup lang="ts">
  import { BegaLogo } from '@kernpunkt/bega-component-library'

  </script>
  