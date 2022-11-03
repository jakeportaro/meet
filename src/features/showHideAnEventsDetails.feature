Feature: Show/Hide an Event Details

    Scenario: An event element is collapsed by default.
        Given A collapsed event element containing events is loaded on the page.
        When  The user opens the app and performs no action.
        Then The event element is collapsed by default.

    Scenario: User can expand an event to see its details.
        Given The event list and event elements have loaded.
        When The user clicks on a  details button in the event element.
        Then The event element expands to show details about the specific event chosen.

    Scenario: User can collapse an event to hide its details.
        Given The event element is showing the event details.
        When The user clicks on the details button again.
        Then The event details part of the event elemnt is collapsed.