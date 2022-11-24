/* eslint-disable */
import { expect, afterEach, vi } from 'vitest'
import { cleanup, render, RenderOptions, RenderResult } from '@testing-library/vue'

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
        TestingLibraryMatchers<T, void> {
    }
  }
}

// Clear testing-library 'render' after each test
// should work automatically (see https://testing-library.com/docs/vue-testing-library/api/#cleanup),
afterEach(() => {
  cleanup()
})

expect.extend(matchers)

const customRender = (component: any, options?: RenderOptions): RenderResult => {
  // const defaultOptions = {
  //   global: {
  //     mocks: {
  //       $t: vi.fn().mockImplementation(() => {
  //         return 'TEST'
  //       }),
  //       $i18n: {
  //         locale: vi.fn(),
  //       },
  //     },
  //   },
  // }

  // const mergedOptions = Object.assign(defaultOptions, options)
  const mergedOptions = {
    global: {
      mocks: {
        $t: vi.fn().mockImplementation(() => {
          return 'TEST'
        }),
        $i18n: {
          locale: vi.fn(),
        },
        ...options?.global?.mocks
      },
      ...options?.global
    },
    ...options
  }
  return render(component, mergedOptions)
}

export * from '@testing-library/vue'

export { customRender as render }

