import {getToken} from '#auth'

const config = useRuntimeConfig()


const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({event})
}

/**
 * Collect all systems related to this user token
 * @param accessToken of the user
 */
const getUsers = async (accessToken: string,  systemId: string) => {
  try {
    return await $fetch(`${config.api.iot.endpoints.systems}/${systemId}/users`, {
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

export default eventHandler(async event => {
  let users: string | any = 'missing-token-to-call-discovery-api'
  const body = await readBody(event)
  const sessionToken = await extractSessionTokenFromCookie(event)
  if (sessionToken && sessionToken.access_token) {
    users = await getUsers(sessionToken.access_token, body.systemId)
  }

  return {users}
})
