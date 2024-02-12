Feature: Login

  Scenario Outline: User login

    Given I am on home page
    When I navigate to Login
    And input "<email>" and "<password>"
    # Then I should see success modal <message>

    Examples:
      | email                 | password    | message            |
      | mux@mailinator.com    | !Password01 | You are logged in! |