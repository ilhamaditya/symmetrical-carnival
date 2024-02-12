import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.ts"; // Adjust the path accordingly
import LoginPage from "../pageobjects/login.page.ts";
import { expect } from 'chai';

Given(/^I am on home page$/, async () => {});

When(/^I navigate to Login$/, async () => {
  await HomePage.navigateToLogin();
});

When(/^input "([^"]*)" and "([^"]*)"$/, async (email, password) => {
  await LoginPage.login(email, password);
});

Then(/^I should see success modal <message>$/, async () => {
 await expect(LoginPage.message).exist;
 (await LoginPage.btnOk).click()
});
