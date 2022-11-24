import {  describe, test, expect, vi } from 'vitest'
// import { render } from '@testing-library/vue'
import { render} from 'test/setup'
import App from '~/app.vue'

describe('App', () => {
  test('should render BEGA Connect logo correctly', () => {
    const { getByTestId, getByText } = render(App, {
      global: {
        mocks: {
          $t: vi.fn().mockImplementation(() => {
            return 'hurtz'
          }),
          $i18n: {
            locale: vi.fn()
          }
        }
      },
    })
    expect(getByTestId('connect-logo')).toBeInTheDocument()
    expect(getByText('hurtz')).toBeTruthy()
  })
})
