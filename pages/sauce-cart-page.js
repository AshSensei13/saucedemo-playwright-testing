import { expect } from "@playwright/test";

class CartPage {
	constructor(page) {
		this.page = page
		this.checkout = page.locator('[data-test="checkout"]')
	}

	async goToCheckout() {
		await this.checkout.click()
	}

	async expectSuccess() {
		await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")
	}
}

module.exports = { CartPage} 