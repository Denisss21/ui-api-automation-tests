import { loginPage } from "../pageObjects/loginPage";
import { ERROR_MESSAGES } from "../constants/ERROR_MESSAGES";

describe("Verify login functionality", () => {
  
  it("Verify successfully login with valid credentials", () => {
    loginPage.loginAsStandarsUser();
  });

  it("Verify error message with invalid password", () => {
    loginPage
      .loginWithInvalidPassword()
      .getErrorMessage().should("be.visible").and("have.text", ERROR_MESSAGES.LOGIN_ERROR_MESSAGE);
  });
});
