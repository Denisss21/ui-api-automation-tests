import { loginPage } from "../pageObjects/loginPage";

describe('Password Input Masking', () => {

  before(() => {
    cy.visit('')
  });

  it('should mask password characters with bullets when typing', () => {
    loginPage.getPasswordField().type('password');
    loginPage.getPasswordField().should('have.attr', 'type', 'password');
  });
});