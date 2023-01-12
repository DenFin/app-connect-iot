<template>
  <div>
    <div class="md:flex gap-5">
      <BegaHeadline type='h1' class="mb-2" :text="$t('my-systems')"/>
      <span
        class="align-middle xl:text-4xl text-2xl font-thin xl:pt-5 md:pt-3 opacity-70">{{
          store.isTestData ? testSystems.systems.items.length : systems?.systems?.items?.length
        }} {{ $t('available') }}</span>
    </div>
    <div class="md:w-2/3 mt-4 md:mt-0" data-testid="intro-text">{{ $t('system-welcome-text') }}</div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-12">
      <div v-for="system in store.isTestData ? testSystems.systems.items : systems?.systems?.items" :key="system.id">
        <BegaCard :title="system?.name">
          <template #preHeadline>
            <span class="text-xs uppercase">{{ system?.connectors[0].gears_count }} {{ $t('luminaire') }}</span>
          </template>
          <template #content>
            <div v-if="system?.location?.address" class="mb-6">{{ system.location.address }}</div>
            <BegaLink data-testid="system-google-maps-link" v-if="system?.location?.address"
                      link-color="text-secondary"
                      :to="getMapsLink(system.location.latitude,system.location.longitude)"
                      icon="MarkerIcon" target="_blank"
                      :text="$t('google-maps-location')"/>
            <BegaButtonATag class="mt-6 shadow-none hover:shadow-none border border-primary" :is-primary="false"
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
