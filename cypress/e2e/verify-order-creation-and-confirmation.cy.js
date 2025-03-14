import { loginPage } from "../pageObjects/loginPage.js";
import { allItemsPage } from "../pageObjects/AllItemsPage.js";
import { cartPage } from "../pageObjects/Cart/CartPage.js";
import { checkoutOverviewPage, overviewPage } from "../pageObjects/Cart/Checkout/CheckoutOverviewPage.js";
import { checkoutYourInformation } from "../pageObjects/Cart/Checkout/CheckoutYourInformation.js";
import { checkoutCompetePage } from "../pageObjects/Cart/Checkout/CheckoutCompletePage.js";

describe("Verify Order Creation and Confirmation", () => {

  before(() => {
    loginPage.loginAsStandarsUser();
  });

  it("Verify creating an order and confirm checkout successfully", () => {
    cy.fixture("/confirmOrder").then((orderInfo) => {

      allItemsPage
        .addItemToCartByName(orderInfo.itemName)
        .goToCart();

      cartPage
        .verifyItemName(orderInfo.itemName)
        .verifyItemPrice(orderInfo.itemPrice)
        .clickCheckoutButton();

      checkoutYourInformation
        .fillCheckoutFrom(orderInfo.firstName,orderInfo.lastName,orderInfo.postalCode)
        .clickContinueButton();

      checkoutOverviewPage
        .verifyItemName(orderInfo.itemName)
        .verifyItemPrice(orderInfo.itemPrice)
        .verifyTotalPriceWithTax(orderInfo.itemPrice)
        .clickFinishButton();

      checkoutCompetePage
        .verifyThankYouHeader()
        .verifyOrderDispatchText();
    });
  });
});
