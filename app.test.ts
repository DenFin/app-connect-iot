import {describe, test, expect, vi, afterEach} from 'vitest'
import {createTestingPinia} from '@pinia/testing'
import App from '~/app.vue'
import {asyncCleanup, asyncRender} from '~/test/setup'

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
  test('should render app content correctly', async () => {
    mockSession = vi.fn(() => Promise.resolve({user: {name: 'Chuck'}}))
    const {getByTestId, getByText} = await asyncRender(App, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        mocks: {
          $t: await vi.fn().mockImplementation(() => {
            return 'locale-translation-mock'
          }),
          $i18n: {
            locale: vi.fn()
          }
        }
      },
    })
    expect(getByTestId('app-content')).toBeInTheDocument()
    expect(getByText('locale-translation-mock')).toBeTruthy()
  })
  afterEach(asyncCleanup)
})
