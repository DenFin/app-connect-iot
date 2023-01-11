import { getToken } from '#auth'

const config = useRuntimeConfig()


const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({ event })
}

/**
 * Collect all systems related to this user token
 * @param accessToken of the user
 */
const getSystems = async (accessToken: string) => {
  try {
    return await $fetch(`${config.api.iot.endpoints.systems}`, {
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
    console.log(error)
    return error
  }
}

export default eventHandler(async event => {
  let systems: string | any  = 'missing-token-to-call-discovery-api'
  const sessionToken = await extractSessionTokenFromCookie(event)
  if (sessionToken && sessionToken.access_token) {
    systems = await getSystems(sessionToken.access_token)
  }

  return { systems }
})
