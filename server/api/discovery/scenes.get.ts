import { getToken } from '#auth'

const config = useRuntimeConfig()


const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({ event })
}

const getScenes = async (accessToken: string) => {
  try {
    console.log('test')
    // @ts-ignore
    console.log(config.api.iot.endpoints.systems)
    console.log(`${config.api.iot.endpoints.scenes.apply('1fe696c1-e2e5-412b-820b-1291afe327b3')}`)
    return await $fetch(`${config.api.iot.endpoints.scenes.apply('1fe696c1-e2e5-412b-820b-1291afe327b3')}`, {
      method: 'GET',
      query: {
        page: 0,
        size: 100,
      },
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
    })
  } catch (error) {
    return error
  }
}

export default eventHandler(async event => {
  let scenes: string | any = 'missing-token-to-call-discovery-api'
  const sessionToken = await extractSessionTokenFromCookie(event)
  if (sessionToken && sessionToken.access_token) {
    scenes = await getScenes(sessionToken.access_token)
  }

  return { scenes }
})
