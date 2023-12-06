Feature: Demo Feature

    Just to create a quik BDD Demo
    this is second line of the description

    Scenario: Should load example website
        Given I open example page
        Then I see page title "Example"
        And check that title is correct

    Scenario Outline: Should load example website
        Given I open example page
        Then I see page title "<title>"
        And check that title is correct

    Examples:
        | title|
        | Example  |
        | fail  |