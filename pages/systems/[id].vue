<template>
  <div>
    <BegaLink to='/systems' :text="$t('go-to-my-systems')" :type='isType' class='block w-full'/>
    <BegaHeadline type='h1' class="mb-2" :text="currentSystem.name"/>
    <span>{{ $t('my-systems-config') }}</span>
    <BegaToggle class='float-right'/>
    <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <BegaCard class='min-h-50'>
          <template #content>
            <div class='relative h-full'>
              <span class="text-xs uppercase">{{ deviceCount }} {{ $t('device', deviceCount) }}</span>
              <BegaHeadline class="mb-0 leading-3 xl:leading-5" type="h4" :text="$t('device', 0)"/>
              <div v-if='gearCount === 0 && sensorCount === 0 && connectorCount === 0'>text placeholder</div>
              <template v-else>
                <div v-if="gearCount > 0">{{ gearCount }} {{ $t('luminaire') }}</div>
                <div v-if="sensorCount > 0">{{ sensorCount  }} {{ $t("sensor", sensorCount) }}</div>
                <div v-if="connectorCount > 0">{{ connectorCount }} {{ $t("connector", connectorCount) }}</div>
              </template>
              <BegaLink :text="$t('to-device-list')" show-arrow class='absolute left-0 bottom-0 -mb-2' link-color='text-secondary' />
            </div>
          </template>
        </BegaCard>
      <BegaCard class='min-h-50'>
        <template #content>
          <div class='relative h-full'>
            <span class="text-xs uppercase">{{ usersTotal }} {{ $t('user', usersTotal) }}</span>
            <BegaHeadline class="mb-0 leading-3 xl:leading-5" type="h4" :text="$t('user', 0)"/>
            <div>{{ $t('control-users-text') }}</div>
            <BegaLink :text="$t('control-users')" show-arrow class='absolute left-0 bottom-0 -mb-2' link-color='text-secondary' />
          </div>
        </template>
      </BegaCard>
      <BegaCard class='min-h-50'>
        <template #content>
          <div class='relative h-full'>
            <span class="text-xs uppercase">{{ automationsTotal }} {{ $t('automation', automationsTotal) }}</span>
            <BegaHeadline class="mb-0 leading-3 xl:leading-5" type="h4" :text="$t('automation', 0)"/>
            <div>{{ $t('control-users-text') }}</div>
            <BegaLink :text="$t('control-users')" show-arrow class='absolute left-0 bottom-0 -mb-2' link-color='text-secondary' />
          </div>
        </template>
      </BegaCard>
    </div>
    <pre class='mt-4 block w-full bg-white text-black'>{{ systems }}</pre>
  </div>
</template>

<script setup lang='ts'>
import { BegaLink, BegaHeadline } from '@kernpunkt/bega-component-library'
import { ConcreteComponent } from 'vue'
import { totalItemsOfArray } from '~/modules/jsHelpers'

const headers = useRequestHeaders(['cookie'])
const route = useRoute()
const systemId = route.params.id
const { data: systems }: any = await useFetch('/api/discovery/systems', {headers: {cookie: headers.cookie || ''}})
// const { data: gears }: any = await useFetch('/api/discovery/gears', {method: 'post', headers: {cookie: headers.cookie || ''}, body: {systemId} })
// console.log(gears)
const { data: users }: any = await useFetch('/api/discovery/users', {method: 'post', headers: {cookie: headers.cookie || ''}, body: {systemId} })
const { data: automations }: any = await useFetch('/api/discovery/automations', {method: 'post', headers: {cookie: headers.cookie || ''}, body: {systemId} })
const systemItems = systems?.value?.systems?.items
const usersTotal = users.value?.users?.total | 0
const automationsTotal = automations.value?.automations?.total | 0
const currentSystem = computed (() => {
  return systemItems?.find((item: any) => item.id === systemId)
})

const connectorCount = computed(() => {
  return totalItemsOfArray(systemItems, 'connectors_count')
})

const gearCount = computed(()=> {
  return totalItemsOfArray(currentSystem.value?.connectors, 'gears_count')
})

const sensorCount = computed (()=> {
  return totalItemsOfArray(currentSystem.value?.connectors, 'control_devices_count')
})

const deviceCount = computed (() => {
  return gearCount.value + sensorCount.value
})

const isType = computed<ConcreteComponent | string>(() => {
  return resolveComponent('nuxt-link')
})

</script>
