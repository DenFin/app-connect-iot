<template>
  <div data-testid="system-card" class="h-full rounded bg-white p-8 text-black">
    <slot name="preHeadline"/>
    <BegaHeadline class="leading-3 xl:leading-5" type="h4" :text="props.title"/>
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
