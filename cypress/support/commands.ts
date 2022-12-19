// @ts-check

import { JWTPayload } from 'jose'
import { encode } from '~/cypress/support/login'

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('getElementBySelector', (selector) => {
  return cy.get(selector)
})

// https://github.com/nextauthjs/next-auth/discussions/2053
// Cypress.Commands.add('login', () => {
//   cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");
//
//   // Set the cookie for cypress.
//   // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
//   // This step can probably/hopefully be improved.
//   // We are currently unsure about this part.
//   // We need to refresh this cookie once in a while.
//   // We are unsure if this is true and if true, when it needs to be refreshed.
//   cy.setCookie("next-auth.session-token", "a valid cookie from your browser session");
//   Cypress.Cookies.preserveOnce("next-auth.session-token");

Cypress.Commands.add('login', (userObj: JWTPayload) => {

  const secret = Cypress.env('NEXTAUTH_JWT_SECRET')
  console.log('secret', secret)
  console.log('userObj', userObj)
  // Generate and set a valid cookie from the fixture that next-auth can decrypt
  cy.wrap(null)
    .then(() => {
      return encode(userObj, secret);
    })
    .then((encryptedToken) => {
      console.log('encryptedToken', encryptedToken)
      cy.setCookie("next-auth.session-token", encryptedToken)
    }
);
});

// });
// https://github.com/nextauthjs/next-auth/discussions/2053#discussioncomment-2808427
