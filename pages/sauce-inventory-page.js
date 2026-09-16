import { expect } from "@playwright/test";

class InventoryPage {
    constructor(page) {
        this.page = page
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikelight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.tshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.fleece = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.onesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.redtshirt = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.cart = page.locator("#shopping_cart_container")
    }

    async addToCart() {
        await this.backpack.click()
        await this.bikelight.click()
        await this.tshirt.click()
        await this.fleece.click()
        await this.onesie.click()
        await this.redtshirt.click()
    }

    async goToCart() {
        await this.cart.click()
    }

    async expectSuccess() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")
    }
}

module.exports = { InventoryPage }