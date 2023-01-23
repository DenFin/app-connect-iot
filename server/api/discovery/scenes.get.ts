import {getToken} from '#auth'

const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({event})
}

const getScenes = async (accessToken: string) => {
  await console.log(accessToken.substring(1, 5))
  return 'nothing to see'
}

export default eventHandler(async event => {
  let scenes: string | any = 'missing-token-to-call-discovery-api'
  const sessionToken = await extractSessionTokenFromCookie(event)
  if (sessionToken && sessionToken.access_token) {
    scenes = await getScenes(sessionToken.access_token)
  }

  return {scenes}
})
