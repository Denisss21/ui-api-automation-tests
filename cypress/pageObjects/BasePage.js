class BasePage {

  getItemName() {
    return cy.get('[data-test="inventory-item-name"]')
  }

  getItemPrice() {
    return cy.get('[data-test="inventory-item-price"]')
  }

  getAppLogoText() {
    return cy.get('.app_logo')
  }

  verifyItemName(itemName) {
    this.getItemName().should("have.text", itemName);

    return this;
  }

  verifyItemPrice(itemPrice) {
    this.getItemPrice().should('have.text', itemPrice);

    return this;
  }

  verifyAppLogoIsVisible() {
    this.getAppLogoText().should('be.visible').and('have.text', 'Swag Labs');

    return this;
  }
}

export default BasePage;