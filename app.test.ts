import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/vue'
import App from '~/app.vue'

describe('App', () => {
  test('should render BEGA Connect logo correctly', () => {
    const { getByTestId } = render(App)
    expect(getByTestId('connect-logo')).toBeInTheDocument()
  })
})
