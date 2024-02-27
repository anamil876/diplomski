import { Locator, Page } from "@playwright/test";
export class WebShop {
    
    readonly page: Page;
    readonly ikonaKosariceGumb: Locator;
    readonly menuGumb: Locator;
    readonly naslovStranice: Locator;
    readonly kartica: Locator;
    readonly slika: Locator;
    readonly naziv: Locator;
    readonly opis: Locator;
    readonly cijena: Locator;
    readonly dodajUkosaricuGumb: Locator;
    readonly filterGumb: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ikonaKosariceGumb = page.locator('#shopping_cart_container a');
        this.menuGumb = page.getByRole('button', { name: 'Open Menu' });
        this.naslovStranice = page.getByText('Swag Labs');
        this.kartica = page.locator('.inventory_item').first();
        this.slika = page.locator('#item_4_img_link');
        this.naziv = page.locator('#item_4_title_link');
        this.opis = page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis');
        this.cijena = page.getByText('$29.99');
        this.dodajUkosaricuGumb = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.filterGumb = page.locator('[data-test="product_sort_container"]');
        
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}