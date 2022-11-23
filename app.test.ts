import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/vue'
import { createI18n } from 'vue-i18n'
import App from '~/app.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  messages: {
    en: {
      welcome: 'foo',
    },
    de: {
      welcome: 'bar',
    },
  },
})

describe('App', () => {
  test('should render BEGA Connect logo correctly', () => {
    const { getByTestId } = render(App, {
      global: {
        plugins: [i18n],
      },
    })
    expect(getByTestId('connect-logo')).toBeInTheDocument()
  })
})
