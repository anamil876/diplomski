import { Locator, Page } from "@playwright/test";
export class Logout {
    
    readonly page: Page;
    readonly menuGumb: Locator;
    readonly logOutGumb: Locator;
    readonly logInGumb: Locator; 

    constructor(page: Page) {
     this.page = page;
     this.menuGumb = page.getByRole('button', { name: 'Open Menu' });
     this.logOutGumb = page.getByRole('link', { name: 'Logout' });
     this.logInGumb = page.locator('[data-test="login-button"]');

    } 

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}
