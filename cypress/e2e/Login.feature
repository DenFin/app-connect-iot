Feature: BCWA-19 User login with BEGA ID

  Scenario: Anonymous user visits landing page
    Given Anonymous User is on the landing page
    Then the page displays login button in the header
    And the page does not display a logout button
    And the page does not display greeting with the user's name

  Given User is logged in
  Then the page displays a greeting with the user's name
  And the page displays a log out button
  And the page does not display a log in button
