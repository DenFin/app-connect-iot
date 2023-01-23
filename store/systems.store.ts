import  { defineStore } from 'pinia'

export const useSystemsStore = defineStore('systems', {
  state:() => ({
    systemsData: {},
  }),

  actions: {
      async getSystems (headers: any) {
        try {
          console.log(headers)
          this.systemsData = await useFetch('/api/discovery/systems', {headers: {cookie: headers.cookie || ''}})
          console.log('hier')
        } catch (error) {
          console.log('get Systems', error)
        }
      }
  }
})
