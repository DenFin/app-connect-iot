import { describe, test, expect, vi } from 'vitest'
import * as nuxtAuth from '@sidebase/nuxt-auth'
import * as i18n from '@nuxtjs/i18n'
import { render } from 'test/setup'
import App from '~/components/TheHeader.vue'

vi.mock('@sidebase/nuxt-auth')
vi.mock('@nuxtjs/i18n')
describe('App', () => {
  test('should render BEGA Connect logo correctly', () => {

    (nuxtAuth as any).useSession = vi.fn().mockReturnValue({
      signIn: vi.fn(),
      signOut: vi.fn(),
      getSession: vi.fn().mockReturnValue({ user: { name: 'TestUser'}})
    })

    (i18n as any).useI18n = vi.fn().mockReturnValue({
      t: vi.fn().mockReturnValue('mock-translation'),
    })

    const { getByTestId, getByText } = render(App, {
      global: {
        mocks: {
          $t: vi.fn().mockImplementation(() => {
            return 'translation-mock'
          }),
          $i18n: {
            locale: vi.fn(),
          },
        },
      },
    })
    expect(getByTestId('connect-logo')).toBeInTheDocument()
    expect(getByText('translation-mock')).toBeTruthy()
  })
})
