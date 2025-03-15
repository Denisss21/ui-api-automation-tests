import BasePage from './BasePage';

require('dotenv').config()

class LoginPage extends BasePage {

  getUsernameField() {
    return cy.get('[data-test="username"]');
  }

  getPasswordField() {
    return cy.get('[data-test="password"]')
  }

  getLoginButton() {
    return cy.get('[data-test="login-button"]')
  }


  getLoginErrorMessage() {
    return cy.get('[data-test="error"]')
  }

  loginAsStandarsUser() {
    cy.visit("")
    this.getUsernameField().type(Cypress.env("USERNAME"));
    this.getPasswordField().type(Cypress.env("USER_PASSWORD"));
    this.getLoginButton().click();
    cy.url().should('include', '/inventory.html');
  }

  loginWithInvalidPassword() {
    cy.visit("")
    this.getUsernameField().type(Cypress.env("USERNAME"));
    this.getPasswordField().type(Cypress.env("INVALID_USER_PASSWORD"));
    this.getLoginButton().click();

    return this;
  }
}

export const loginPage = new LoginPage;