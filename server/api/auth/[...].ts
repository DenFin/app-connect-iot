import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig();

const BegaConnectProvider = {
  id: 'begaid',
  name: 'BegaId',
  clientId: 'WebsiteOidc',
  secret: 'ignore-this',
  wellKnown: `${config.BEGA_ID_ENDPOINT_BASE}/.well-known/openid-configuration`,
  authorization: { params: { scope: 'openid offline_access address profile phone email roles role-validation.Api Website.Api my-orders.ap' } },
  idToken: true,
  checks: ['pkce', 'state'],
  profile(profile: { sub: any; given_name: any; email: any; }) {
    return {
      id: profile.sub,
      name: profile.given_name,
      email: profile.email,
    }
  },
}

export default NuxtAuthHandler({
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    // CustomProvider
    BegaConnectProvider,
  ],
})
