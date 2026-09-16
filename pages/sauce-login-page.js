import { expect } from "@playwright/test";

class SauceLoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.submitButton = page.locator("#login-button");
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/', {
            waitUntil: "domcontentloaded",
        })
    }

    async fillRequiredFields({ username, password }) {
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async submit() {
        await this.submitButton.click()
    }

    async expectSuccess() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }

}

module.exports = { SauceLoginPage }