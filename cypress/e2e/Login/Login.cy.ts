import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


/**
 * Scenario: Anonymous user visits landing page
 */
Given('Anonymous User is on the landing page', () => {
  cy.visit('/');
})

Then('the page displays login button in the header', () => {
  cy.getByTestId('btn-login-header').should('exist')
})

Then('the page does not display a logout button', () => {
  cy.getByTestId('btn-logout-header').should('not.exist')
})

Then('the page does not display greeting with the user\'s name', () => {
  cy.getByTestId('welcome-message').should('not.exist')
})


/**
 * Scenario Outline: Anonymous user starts login process
 */
Given('Anonymous user is on the landing page', () => {
  cy.visit('/');
})

When('Anonymous user triggers the login via click', () => {
  // cy.getByTestId('btn-login-header').trigger('click')
  cy.getByTestId('btn-login-header').click({ force: true })
})

Then('the page redirects to BEGA ID login page', () => {
  cy.url({ timeout: 15_000 }).should('be.equals', 'https://login.bega.com/login')
})

Then('login form is visible on BEGA ID login page', () => {
  // quatsch
  cy.getByTestId('welcome-message').should('not.exist')
})
