/**
 * This middleware serves as the final endpoint of the federate sign out flow to clear the client based session (Cookie)
 */
export default defineNuxtRouteMiddleware(async (to) => {
  console.log('target', to)
  const { signOut } = useSession()
  try {
    await signOut({ callbackUrl: '/dashboard', redirect: false})
  } catch (error) {
    console.log(error)
  }
  return '/dashboard'
})
