class AllItemsPage { 

  getItemContainer() {
    return cy.get('[data-test="inventory-container"]')
  }

  getAddToCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
  }

  getCartButton() {
    return cy.get('[data-test="shopping-cart-link"]')
  }

  addItemToCartByName(itemName) {
    cy.get(`.inventory_item:contains('${itemName}') [data-test="add-to-cart-sauce-labs-backpack"]`).click();

    return this;
  }

  goToCart() {
    this.getCartButton().click();

    return this;
  }
}

export const allItemsPage = new AllItemsPage;