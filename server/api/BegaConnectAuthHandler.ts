import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'


// const config = useRuntimeConfig();

// const CustomProvider = {
//     id: "begaid",
//     name: "BegaId",
//     clientId: 'WebsiteOidc',
//     wellKnown: `${config.BEGA_ID_ENDPOINT_BASE}/.well-known/openid-configuration`,
//     authorization: { params: { scope: "openid offline_access address profile phone email roles role-validation.Api Website.Api my-orders.ap" } },
//     idToken: true,
//     checks: ["pkce", "state"],
//     profile(profile: { sub: any; given_name: any; email: any; }) {
//       return {
//         id: profile.sub,
//         name: profile.given_name,
//         email: profile.email,
//       }
//     },
//   }

export default NuxtAuthHandler({
    pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login'
    },
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    // CustomProvider
    GithubProvider.default({ clientId: '059ac6f181489dada42b', })
  ]
})