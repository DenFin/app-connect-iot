/// <reference types="cypress" />

// https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/global.d.ts

declare namespace Cypress {
  interface Chainable {
    getByTestId(
      dataTestAttribute: string,
      args?: any,
    ): Chainable<JQuery<HTMLElement>>,
    getElementBySelector(
      selector: string
    ): Chainable<JQuery<HTMLElement>>,
    /**
     * Logs-in user to the identity provider
     */
    customLogin(userObj: any): void
  }
}
