Feature: login functionality

    checking login possible outcomes 


Scenario: sucessuful login case

Given user is on home page
When user enter valid credentials
Then user should be able to login


Scenario: unsucessful login case

Given user is at home page
When user enter invalid credentials
Then user should not be able to login

Scenario: multiple successful login case

Given user is on landing page
When user enter "id" and "password"
Then user should login to profile


Examples:
    | id | password |
    | standard_user   | secret_sauce  |
    | locked_out_user | secret_sauce |
    | problem_user | secret_sauce |
