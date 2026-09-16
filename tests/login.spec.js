import { expect, test } from "@playwright/test";
const { SauceLoginPage } = require('../pages/sauce-login-page')

test("logs in the login page using a page object", async ({ page }) => {
    const login = new SauceLoginPage(page);
    await login.goto()

    await login.fillRequiredFields({
        username: "standard_user",
        password: "secret_sauce"
    })

    await login.submit()
    await login.expectSuccess()
})