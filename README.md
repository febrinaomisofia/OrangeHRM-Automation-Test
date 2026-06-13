# OrangeHRM Automation Test
OrangeHRM Automation Test using Cypress

## Tools
- Cypress
- JavaScript

## Framework
- Page Object Model (POM)
- Cypress Intercept

## Features Tested

### Login Feature Test Cases
For the Login feature, I created several test scenarios to validate both positive and negative cases.

-TC001 – Login with Valid Credentials
This test verifies that a user can successfully log in using a valid username and password and is redirected to the Dashboard page.

-TC002 – Login with Invalid Password
This test verifies that the system displays an error message when a valid username is entered with an incorrect password.

-TC003 – Login with Invalid Username
This test verifies that the system displays an error message when an invalid username is entered.

-TC004 – Login with Empty Username
This test verifies that the Required validation message is displayed when the username field is left empty.

**TC005 – Login with Empty Password
This test verifies that the Required validation message is displayed when the password field is left empty.

-TC006 – Verify PIM Menu Displayed
This test verifies that the PIM menu is visible after a successful login.

-TC007 – Verify Leave Menu Displayed
This test verifies that the Leave menu is visible after a successful login.

-TC008 – Verify Time Menu Displayed
This test verifies that the Time menu is visible after a successful login.

-TC009 – Verify Recruitment Menu Displayed
This test verifies that the Recruitment menu is visible after a successful login.

-TC010 – Verify My Info Menu Displayed
This test verifies that the My Info menu is visible after a successful login.

-TC011 – Verify User Dropdown Exists
This test verifies that the user profile dropdown is displayed on the Dashboard page.

-TC012 – Verify Search Input Exists
This test verifies that the search input field is displayed and accessible after login.

### Directory Feature Test Cases
For the Directory feature, I created 8 automated test cases to validate employee search functionality and directory page behavior.

-TC001 – Open Directory Menu
This test verifies that the user can successfully access the Directory page after logging into the system.

-TC002 – Search Employee Name
This test verifies that the employee search functionality works correctly by searching for a specific employee name and validating the API response using Cypress Intercept.

-TC003 – Search Existing Employee
This test verifies that the system can return employee records when a valid search keyword is entered.

-TC004 – Search Non-Existing Employee
This test verifies that the search functionality handles invalid employee names correctly and returns a successful API response without causing any system errors.

-TC005 – Reset Search
This test verifies that the Reset button can clear the search criteria and reload the default employee directory data.

-TC006 – Search with Single Character
This test verifies that the search field accepts a single character and processes the search request successfully.

-TC007 – Search with Special Characters
This test verifies that the system can handle special character inputs without crashing or producing unexpected behavior.

-TC008 – Verify Employee Cards Displayed
This test verifies that employee cards are displayed correctly when the directory search is performed.

### Recruitment Feature Test Cases
For the Recruitment feature, I created 8 automated test cases to validate candidate search functionality and recruitment page behavior.

-TC001 – Open Recruitment Menu
This test verifies that the user can successfully access the Recruitment page after logging into the system.

-TC002 – Search Candidate Name
This test verifies that the candidate search functionality works correctly by searching for a specific candidate name and validating the API response using Cypress Intercept.

-TC003 – Search Existing Candidate
This test verifies that the system can display candidate records when a valid search keyword is entered.

-TC004 – Search Invalid Candidate
This test verifies that the search functionality handles invalid candidate names correctly and returns a successful API response without causing any system errors.

TC005 – Reset Search
This test verifies that the Reset button can clear the search criteria and reload the default recruitment data.

TC006 – Open Add Candidate Form
This test verifies that the user can navigate to the Add Candidate page successfully.

TC007 – Verify Recruitment Table Displayed
This test verifies that the recruitment data table is displayed correctly after performing a search.

TC008 – Search with Special Characters
This test verifies that the system can handle special character inputs without crashing or producing unexpected behavior.

**Total Test Cases: 28**
