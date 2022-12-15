import { describe, test, expect, vi, afterEach } from 'vitest'
import TheHeader from '~/components/TheHeader.vue'
import { asyncCleanup, asyncRender } from '~/test/setup'

// mocking the third party composables provided by auto imports
vi.mock('#imports', () => ({
  useI18n() {
    return {
      t: (message: string) => message,
    }
  },
  useSession() {
    return {
      getSession: mockSession,
      signIn: vi.fn(),
    }
  },
}))

let mockSession = vi.fn(() => Promise.resolve({}))

describe('App', () => {
  test('should render BEGA Connect logo correctly', async () => {
    const { getByTestId, getByText } = await asyncRender(TheHeader)
    expect(getByTestId('connect-logo')).toBeInTheDocument()
    expect(getByText('sign-in')).toBeTruthy()
  })

  test('should render logout button is user is logged in', async () => {
    mockSession = vi.fn(() => Promise.resolve({ user: { name: 'Chuck'}}))
    const { getByTestId, getByText } = await asyncRender(TheHeader)
    expect(getByTestId('connect-logo')).toBeInTheDocument()
    expect(getByText('welcome Chuck')).toBeTruthy()
    expect(getByText('sign-out')).toBeTruthy()
  })

  afterEach(asyncCleanup)
})
