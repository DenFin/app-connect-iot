import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import userObj from "~/cypress/fixtures/session.json";

/**
 * Scenario: Anonymous user visits the system overview
 */
Given('User is on systems overview', () => {
  cy.customLogin(userObj)
  cy.visit('/systems')
})
Then('the page displays an intro text', function () {
  cy.getByTestId('intro-text').should('exist')
});
Then('the page displays the users systems as cards', function () {
  cy.intercept('GET', '/api/discovery/systems', { fixture: 'systems.json' })
  cy.getByTestId('system-card').should('exist')
  cy.getByTestId('system-google-maps-link').should('exist')
});
When('User triggers system google maps element', function () {
  cy.getByTestId('system-google-maps-link').invoke('removeAttr', 'target').click()
});
Then('a new tab opens', function () {
  cy.url().should('include', 'google.com/maps')
});
Then('the tab display google maps with the marker at the selected system address', function () {
  cy.url().should('include', '@50.9647577,6.9109848,14z')
});
