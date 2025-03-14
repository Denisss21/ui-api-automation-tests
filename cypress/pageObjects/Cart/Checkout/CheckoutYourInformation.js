class CheckoutYourInformation {

  getFirstNameField() {
    return cy.get('[data-test="firstName"]');
  }

  getLastNameField() {
    return cy.get('[data-test="lastName"]');
  }

  getPostalCodeField() {
    return cy.get('[data-test="postalCode"]');
  }

  getContinueButton() {
    return cy.get('[data-test="continue"]');
  }

  fillCheckoutFrom(firstName, lastName, postalCode) {
    this.getFirstNameField().type(firstName);
    this.getLastNameField().type(lastName);
    this.getPostalCodeField().type(postalCode);

    return this;
  }

  clickContinueButton() {
    this.getContinueButton().click();

    return this;
  }
}

export const checkoutYourInformation = new CheckoutYourInformation;