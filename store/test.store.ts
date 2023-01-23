import {defineStore} from 'pinia'

export const useTestStore = defineStore('test', () => {
  const useTestData = ref(false)
  const isTestData = computed(() => useTestData.value)

  function changeDataInput() {
    useTestData.value = !useTestData.value
  }

  return {
    isTestData,
    changeDataInput
  }
})
