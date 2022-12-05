import { getToken } from '#auth'


const showToken = async (event: any) => {
  const token = await getToken({ event })

  console.log('HAPPY', token)
}

export default eventHandler(event => {
  showToken(event).then()
  return { scenes: 'test' }
})
