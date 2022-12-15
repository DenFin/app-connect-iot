/* eslint-disable */
import { expect, afterEach, vi } from 'vitest'
import { cleanup, render, RenderOptions, RenderResult } from '@testing-library/vue'
import { asyncRender, asyncCleanup } from './render'

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

/**
 * Enrich the asyncRender() function from VTL with custom properties to mock the i18n module provided global functions
 */
const customAsyncRender = async (component: any, options?: RenderOptions): Promise<RenderResult> => {
  const mergedOptions = {
    global: {
      mocks: {
        $t: (message: string) => message,
        $i18n: {
          locale: vi.fn(),
        },
        ...options?.global?.mocks
      },
      ...options?.global
    },
    ...options
  }
  // @ts-ignore
  return asyncRender(component, mergedOptions)
}

/**
 * Enrich the render() function from VTL with custom properties to mock the i18n module provided global functions
 */
const customRender = (component: any, options?: RenderOptions): RenderResult => {
  const mergedOptions = {
    global: {
      mocks: {
        $t: (message: string) => message,
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
export { customRender as render, customAsyncRender as asyncRender, asyncCleanup}

