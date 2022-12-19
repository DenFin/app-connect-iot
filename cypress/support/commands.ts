// @ts-check

import { JWTPayload } from 'jose'
import { encode } from '~/cypress/support/login'

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('getElementBySelector', (selector) => {
  return cy.get(selector)
})


/**
 * Have 2 possible options
 * 1. Intercept auth calls to server api
 * @link https://github.com/nextauthjs/next-auth/discussions/2053#discussioncomment-1191016
 * 2. Add session cookie with encrypted data:
 * @link https://github.com/nextauthjs/next-auth/discussions/2053#discussioncomment-2225544
 *
 * We choose 2 "Generate and set a valid cookie from the fixture that next-auth can decrypt"
 */
Cypress.Commands.add('customLogin', (userObj: JWTPayload): void => {
  const secret = Cypress.env('NEXTAUTH_JWT_SECRET')
  cy.wrap(null)
    .then(() => {
      return encode(userObj, secret)
    })
    .then((encryptedToken) => {
        cy.setCookie('next-auth.session-token', encryptedToken)
      },
    )
})
