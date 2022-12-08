<template>
  <NuxtLayout>
    <BegaContainer data-testid='app-content'>
      <div class='m-4'>
        <div>
          <form>
            <select v-model='$i18n.locale'>
              <option value='en'>en</option>
              <option value='de'>de</option>
            </select>
            <p>{{ $t('welcome') }}</p>
          </form>
        </div>
        <br />
      </div>
    </BegaContainer>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang='ts'>
import { BegaContainer } from '@kernpunkt/bega-component-library'
</script>

<style>
code {
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
  display: block;
  overflow-x: scroll;
}
</style>
