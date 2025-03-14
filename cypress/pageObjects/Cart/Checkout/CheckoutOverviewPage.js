import BasePage from "../../BasePage";

class CheckoutOverviewPage extends BasePage {
  getFinishButton() {
    return cy.get('[data-test="finish"]');
  }

  getTotalItemPrice() {
    return cy.get('[data-test="total-label"]');
  }

  clickFinishButton() {
    this.getFinishButton().click();

    return this;
  }

  verifyTotalPriceWithTax(itemPrice) {
    const refactoredItemPrice = parseFloat(itemPrice.replace(/[^\d.-]/g, ''));
    const expectedTotal = (refactoredItemPrice * 0.08) + refactoredItemPrice;

    this.getTotalItemPrice().invoke('text').then((totalPrice) => {
      const total = parseFloat(totalPrice.replace(/[^\d.-]/g, ''));
      expect(total).to.equal(Number(expectedTotal.toFixed(2)));
    });

    return this;
  }
}

export const checkoutOverviewPage = new CheckoutOverviewPage();
