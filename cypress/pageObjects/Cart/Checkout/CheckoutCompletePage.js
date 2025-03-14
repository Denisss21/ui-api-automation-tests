import { SUCCESS_0RDER_MESSAGES } from "../../../constants/SUCCESS_MESSAGES";

class CheckoutCompetePage {

  getThankYouHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  getCompleteText() {
    return cy.get('[data-test="complete-text"]');
  }

  verifyThankYouHeader() {
    this.getThankYouHeader().should('be.visible').and('contain.text', SUCCESS_0RDER_MESSAGES.SUCCESS_ORDER_HEADER);

    return this;
  }

  verifyOrderDispatchText() {
    this.getCompleteText().should('be.visible').and('contain.text', SUCCESS_0RDER_MESSAGES.SUCCESS_ORDER_MESSAGE);

    return this;
  }
}

export const checkoutCompetePage =  new CheckoutCompetePage;