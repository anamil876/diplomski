import { Locator, Page } from "@playwright/test";
export class Menu {

    readonly page: Page;
    readonly menuGumb: Locator;
    readonly sviProizvodiGumb: Locator;
    readonly oNamaGumb: Locator;
    readonly resetirajStanjeAplikacijeGumb: Locator;
    readonly zatvoriMenuGumb: Locator;

    constructor(page: Page) {
     this.page = page;
     this.menuGumb = page.getByRole('button', { name: 'Open Menu' });
     this.sviProizvodiGumb = page.getByRole('link', { name: 'All Items' });
     this.oNamaGumb = page.getByRole('link', { name: 'About' });
     this.resetirajStanjeAplikacijeGumb = page.getByRole('link', { name: 'Reset App State' });
     this.zatvoriMenuGumb = page.getByRole('button', { name: 'Close Menu' });

    } 

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}
