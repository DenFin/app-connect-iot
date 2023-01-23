import {getToken} from '#auth'

const config = useRuntimeConfig()

const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({event})
}

/**
 * Collect all systems related to this user token
 * @param accessToken of the user
 */
const getGears = async (accessToken: string, systemId: string) => {
  try {
    return await $fetch(`${config.api.iot.endpoints.systems}/${systemId}/gears`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
    })
  } catch (error) {
    console.log(error)
    return error
  }
}

export default defineEventHandler(async (event) => {
  let gears: string | any = 'missing-token-to-call-discovery-api'
  const body = await readBody(event)
  const sessionToken = await extractSessionTokenFromCookie(event)
  if (sessionToken && sessionToken.access_token) {
    gears = await getGears(sessionToken.access_token, body.systemId)
  }

  return {gears}
})
