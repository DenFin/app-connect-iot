<template>
  <div>
    <div class="gap-5 md:flex">
      <BegaHeadline type='h1' class="mb-2" :text="$t('my-systems')"/>
      <span
        class="align-middle text-2xl font-thin opacity-70 md:pt-3 xl:pt-5 xl:text-4xl">{{
          store.isTestData ? testSystems.systems.items.length : systems?.systems?.items?.length
        }} {{ $t('available') }}</span>
    </div>
    <div class="mt-4 md:mt-0 md:w-2/3" data-testid="intro-text">{{ $t('system-welcome-text') }}</div>
    <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="system in store.isTestData ? testSystems.systems.items : systems?.systems?.items" :key="system.id">
        <BegaCard :title="system?.name">
          <template #preHeadline>
            <span class="text-xs uppercase">{{ system?.connectors[0].gears_count }} {{ $t('luminaire') }}</span>
          </template>
          <template #content>
            <div v-if="system?.location?.address" class="mb-6">{{ system.location.address }}</div>
            <BegaLink
              v-if="system?.location?.address" data-testid="system-google-maps-link"
              link-color="text-secondary"
              :to="getMapsLink(system.location.latitude,system.location.longitude)"
              icon="MarkerIcon" target="_blank"
              :text="$t('google-maps-location')"/>
            <BegaButtonATag
              class="border-primary mt-6 border shadow-none hover:shadow-none" :is-primary="false"
              text-classes="font-semibold" show-arrow
              :text="$t('more-information')"/>
          </template>
        </BegaCard>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {BegaHeadline, BegaLink, BegaButtonATag} from '@kernpunkt/bega-component-library'
import testSystems from '~/cypress/fixtures/systems.json'
// TODO: Entfernen wenn nicht mehr benötigt und aus template ausbauen
import {useTestStore} from "~/store/test.store";

const store = useTestStore()
const headers = useRequestHeaders(['cookie'])
const {data: systems} = await useFetch('/api/discovery/systems', {headers: {cookie: headers.cookie || ''}})

function getMapsLink(lat: number, long: number) {
  return encodeURI(`https://www.google.com/maps/search/?api=1&query=${lat},${long}`)
}
</script>
