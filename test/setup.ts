import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/vue'

import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers'

// https://github.com/testing-library/jest-dom/issues/439#issuecomment-1087504347
// https://github.com/testing-library/jest-dom/issues/427
// Add jest-dom custom matchers and fix their types
declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

// Clear testing-library 'render' after each test
// should work automatically (see https://testing-library.com/docs/vue-testing-library/api/#cleanup),
afterEach(() => {
  cleanup()
})

expect.extend(matchers)


