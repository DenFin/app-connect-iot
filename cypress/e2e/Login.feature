Feature: BCWA-19 User login with BEGA ID

  Scenario: Anonymous user visits landing page
    Given Anonymous User is on the landing page
    Then the page displays login button in the header
    And the page does not display a logout button
    And the page does not display greeting with the user's name

  Scenario: Anonymous user starts login process
    Given Anonymous user is on the landing page
    When Anonymous user triggers the login via click
    Then the page redirects to BEGA ID login page
    And login form is visible on BEGA ID login page



#  Scenario Outline: Anonymous user starts login process
#    Given Anonymous user is on the landing page
#    When Anonymous user triggers the login via "<action>"
#    Then the page redirects to BEGA ID login page
#    And login form is visible on BEGA ID login page
#
#    Examples:
#      | action |
#      | click  |
#      | touch  |
#
#  Scenario: Anonymous users starts login process via keyboard inputs
#    Given Anonymous user is on the landing page
#    When Anonymous user triggers the login via tab+enter combination
#    Then the page redirects to BEGA ID login page
#    And login form is visible on BEGA ID login page
#
#  Scenario: Anonymous user enters valid user data
#    Given Anonymous user on the BEGA ID login page
#    When Anonymous user enters valid user data
#    Then the log in page redirects to the landing page
#    And the page displays a greeting with the user's name
#    And the page displays a log out button
#    And the page does not display a log in button
#
#  Scenario: Logged in user reloads the landing page
#    Given Logged in user is on the landing page
#    When user reloads the page
#    Then user is still logged in
#    And the page displays a greeting with the user's name
#    And the page displays a log out button
#    And the page does not display a log in button
#
#  Scenario Outline: Logged in user triggers the logout button
#    Given Logged in user is on the landing page
#    When user triggers the logout button via "<action>"
#    Then logged out user is on the landing page
#    And the page displays login button in the header
#    And the page does not display a logout button
#    And the page does not display greeting with the user's name
#
#    Examples:
#      | action |
#      | click  |
#      | touch  |
#
#  Scenario: Logged in user triggers the logout button via keyboard
#    Given Logged in user is on the landing page
#    When user presses tab until logout button is focused
#    And user presses enter
#    Then logged out user is on the landing page
#    And the page displays login button in the header
#    And the page does not display a logout button
#    And the page does not display greeting with the user's name
