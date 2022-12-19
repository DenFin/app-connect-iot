import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import userObj from './../../fixtures/session.json'


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
Given('User is logged in', () => {
  cy.login(userObj);
  cy.visit('/dashboard');
})

Then('the page displays a greeting with the user\'s name', () => {
  cy.getByTestId('welcome-message').should('exist')
})
Then('the page displays a log out button', () => {
  cy.getByTestId('btn-logout-header').should('exist')
})

Then('the page does not display a log in button', () => {
  cy.getByTestId('btn-login-header').should('not.exist')
})
