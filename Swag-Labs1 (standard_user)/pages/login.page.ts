import { Locator, Page } from "@playwright/test";
export class LogIn {
    
    readonly page: Page;
    readonly korisnickoIme: Locator;
    readonly lozinka: Locator;
    readonly logInGumb: Locator; 
    readonly porukaGreske: Locator;

    constructor(page: Page) {
     this.page = page;
     this.korisnickoIme = page.locator('[data-test="username"]');
     this.lozinka = page.locator('[data-test="password"]');
     this.logInGumb = page.locator('[data-test="login-button"]');
     this.porukaGreske = page.locator('[data-test="error"]');

    } 

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}
