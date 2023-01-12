<template>
  <div data-testid="system-card" class="bg-white text-black rounded p-8 text-black h-full">
    <slot name="preHeadline"/>
    <BegaHeadline class="xl:leading-5 leading-3" type="h4" :text="props.title"/>
    <slot name="content"/>
  </div>
</template>

<script setup lang="ts">
import {
  BegaHeadline,
} from '@kernpunkt/bega-component-library'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})
</script>
