Feature: Specify Number of Events

    Scenario: When user has not specified a number, 32 is the default number.
        Given The app has loaded
        When The user has yet to choose a number of events in the input box.
        Then A default number of 32 events is loaded on the page.

    Scenario: User can change the number of events they want to see.
        Given The app has loaded.
        When User changes the number of events in the input box.
        Then The event list elements shows the number of events set by the user.