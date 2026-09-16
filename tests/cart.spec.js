import { expect, test } from "@playwright/test";
const { SauceLoginPage } = require('../pages/sauce-login-page')
const { InventoryPage } = require('../pages/sauce-inventory-page')
const { CartPage } = require('../pages/sauce-cart-page')

test("logs in, adds to cart and then goes to cart", async ({ page }) => {
    const login = new SauceLoginPage(page);
    const inventory = new InventoryPage(page)
	const cart = new CartPage(page)

    await login.goto()

    await login.fillRequiredFields({
        username: "standard_user",
        password: "secret_sauce"
    })

	await login.submit()

	await inventory.addToCart()
    await inventory.goToCart()

	await cart.goToCheckout()

	await cart.expectSuccess()
})