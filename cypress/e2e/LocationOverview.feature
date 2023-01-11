Feature: BCWA-20 location overview

  Scenario: Anonymous user visits the system overview
    Given User is on systems overview
    Then the page displays an intro text
    And the page displays the users systems as cards

  Scenario: User opens google maps
    Given User is on systems overview
    When User triggers system google maps element
    Then a new tab opens
    And the tab display google maps with the marker at the selected system address
