/* eslint-disable */
import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig()

type BegaUserInfo = {
  sub: string
  email: string
  gender: string
  given_name: string
  name: string
  family_name: string
  locale: string
  phone_number: string
  preferred_username: string
}

export default NuxtAuthHandler({
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    //     jwt: async ({ token, user, account, profile, isNewUser }) => {
    jwt: async ({ token, account }) => {
      // access_token needs to be stored in session cookie
      // until we haven't implemented a database adapter for database driven session management
      if (account?.access_token) {
        token.access_token = account.access_token
      }
      // id_token needs to be stored in session cookie necessary for federate signout of identity provider
      if (account?.id_token) {
        token.id_token = account.id_token
      }
      // user && (token.user = user)
      return token
    },
    // session: async ({ session, token, user}) => {
    session: async ({ session }) => {
      // if (session.user) {
      //   session.user.id = token.id || ''
      // }
      return session
    },
  },
  // secret which is used to encrypt/decrypt the session cookie
  secret: config.NEXTAUTH_JWT_SECRET,
  providers: [
    // https://github.com/nextauthjs/next-auth/discussions/4164
    {
      id: 'bega',
      name: 'BegaIdConnect',
      clientId: 'BegaConnectWebsiteOidc',
      clientSecret: 'foo-bar',
      type: 'oauth',
      wellKnown: `${config.public.BEGA_ID_ENDPOINT_BASE}/.well-known/openid-configuration`,
      userinfo: {
        async request(context) {
          const accessToken: string = context.tokens.access_token || ''
          return await context.client.userinfo(accessToken)
        },
      },
      authorization: {
        params: {
          scope: 'BegaConnectService.Api email openid phone address profile',
          // redirect_uri: '/api/custom_callback',
          ui_culture: 'de-DE',
        },
      },
      idToken: true,
      checks: ['pkce', 'state'],
      profile(profile: BegaUserInfo) {
        return {
          id: profile.sub,
          name: profile.given_name,
          email: profile.email,
          locale: profile.locale,
          gender: profile.gender,
        }
      },
      style: {
        logo: 'https://images.ctfassets.net/w2xcep4i3dcd/2yTUItV7LeHwmdKT8hYqoJ/e99705bf4857fc24b44f45ce9cd55fe2/Zeichenfla__che_1.svg?fit=fill&w=200&f=center&q=80',
        logoDark:
          'https://images.ctfassets.net/w2xcep4i3dcd/1QmF3NiXI21BSl8deAshd5/b625a02b7d819aa24db428a86eca73ad/BEGA_neg.svg?fit=fill&w=200&q=80',
        bg: '#fff',
        bgDark: '#000',
        text: '#000',
        textDark: '#fff',
      },
    },
    {
      id: 'begaid',
      name: 'BegaId',
      clientId: 'WebsiteOidc',
      type: 'oauth',
      wellKnown: `${config.public.BEGA_ID_ENDPOINT_BASE}/.well-known/openid-configuration`,
      authorization: {
        params: {
          scope: 'openid offline_access address profile phone email roles role-validation.Api Website.Api my-orders.api',
          redirect_uri: 'http://localhost:3000/authenticated',
          ui_culture: 'de-DE',
        },
      },
      idToken: false,
      checks: ['pkce', 'state'],
      profile(profile: BegaUserInfo) {
        return {
          id: profile.sub,
          name: profile.given_name,
          email: profile.email,
        }
      },
      style: {
        logo: 'https://images.ctfassets.net/w2xcep4i3dcd/2yTUItV7LeHwmdKT8hYqoJ/e99705bf4857fc24b44f45ce9cd55fe2/Zeichenfla__che_1.svg?fit=fill&w=200&f=center&q=80',
        logoDark:
          'https://images.ctfassets.net/w2xcep4i3dcd/1QmF3NiXI21BSl8deAshd5/b625a02b7d819aa24db428a86eca73ad/BEGA_neg.svg?fit=fill&w=200&q=80',
        bg: '#fff',
        bgDark: '#000',
        text: '#000',
        textDark: '#fff',
      },
    },
  ],
})
