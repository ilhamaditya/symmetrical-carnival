import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.ts'; // Adjust the path accordingly


Given(/^I am on home page$/, async () => {
});

When(/^I navigate to Login$/, async () => {
    await HomePage.navigateToLogin()
});

When(/^input <email> and <password>$/, () => {
    return true;
});

Then(/^I should see success modal <message>$/, () => {
    return true;
});