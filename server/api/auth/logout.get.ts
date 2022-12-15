import { getToken } from '#auth'

const config = useRuntimeConfig()

const extractSessionTokenFromCookie = async (event: any) => {
  return await getToken({ event })
}

/**
 * Generating the endsession endpoint redirect url including the id_token and redirect url
 *
 * Currently a redirect outside of client doesn't work, that's why we return only the redirect URL including the id_token...would be nicer if the redirect is executed from the server-side
 *
 * @link https://identityserver4.readthedocs.io/en/latest/endpoints/endsession.html
 * @link https://github.com/nextauthjs/next-auth/issues/836
 */
export default eventHandler(async event => {
  try {
    const sessionToken = await extractSessionTokenFromCookie(event)
    if (sessionToken && sessionToken.id_token) {
      return `${config.public.BEGA_ID_ENDPOINT_BASE}/connect/endsession?id_token_hint=${sessionToken.id_token}&post_logout_redirect_uri=${config.server.api.logout}`
    }
  } catch (error) {
    // how to log middleware side?
    console.log(error)
    // res.redirect(process.env.NEXTAUTH_URL)
  }

  return '/'
})
