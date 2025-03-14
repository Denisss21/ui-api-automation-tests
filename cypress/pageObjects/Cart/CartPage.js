import BasePage from "../BasePage";

class CartPage extends BasePage {

  getCheckoutButton() {
    return cy.get('[data-test="checkout"]')
  }

  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }
}

export const cartPage = new CartPage;