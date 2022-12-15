import {  describe, test, expect, vi } from 'vitest'
import { render } from 'test/setup'
import App from '~/app.vue'

describe('App', () => {
  test('should render app content correctly', () => {
    const { getByTestId, getByText } = render(App, {
      global: {
        mocks: {
          $t: vi.fn().mockImplementation(() => {
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
})
