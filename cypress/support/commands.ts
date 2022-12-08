// @ts-check

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('getElementBySelector', (selector) => {
  return cy.get(selector)
})
