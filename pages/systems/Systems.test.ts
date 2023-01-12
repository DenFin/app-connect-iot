import { describe, test, expect, vi, afterEach } from 'vitest'
import Systems from '~/pages/index.vue'
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

describe('Systems', () => {
  test('should render intro text', async () => {
    mockSession = vi.fn(() => Promise.resolve({ user: { name: 'Chuck'}}))
    const { getByTestId } = await asyncRender(Systems)
    expect(getByTestId('intro-text')).toBeInTheDocument()
  })

  afterEach(asyncCleanup)
})
