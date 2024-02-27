import { Locator, Page } from "@playwright/test";
export class Narudzba {
    
    readonly page: Page;
    readonly ikonaKoSariceGumb: Locator;
    readonly checkoutGumb: Locator;
    readonly poljeIme: Locator; 
    readonly poljePrezime: Locator;
    readonly poljePostanskiBroj: Locator;
    readonly gumbNastavi: Locator;
    readonly gumbZavrsi: Locator;
    readonly ponistiGumb: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ikonaKoSariceGumb = page.locator('#shopping_cart_container a');
        this.checkoutGumb = page.locator('[data-test="checkout"]');
        this.poljeIme = page.locator('[data-test="firstName"]');
        this.poljePrezime = page.locator('[data-test="lastName"]');
        this.poljePostanskiBroj = page.locator('[data-test="postalCode"]');
        this.gumbNastavi = page.locator('[data-test="continue"]');
        this.gumbZavrsi = page.locator('[data-test="finish"]');
        this.ponistiGumb = page.locator('[data-test="cancel"]');

        
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}
