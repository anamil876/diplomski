import { Locator, Page } from "@playwright/test";
export class Kosarica {

    readonly page: Page;
    readonly dodajUkosaricuGumbRuksak: Locator;
    readonly dodajUKosaricuGumbSvjetloZaBiciklu: Locator;
    readonly dodajUkosaricuGumbBoltMajica: Locator;
    readonly dodajUkosaricuGumbVunenaJaketa: Locator;
    readonly dodajUkosaricuGumbBodi: Locator;
    readonly dodajUkosaricuGumbCrvenaMajica: Locator;

    readonly ikonaKosariceGumb: Locator;

    readonly ukloniGumbKosaricaRuksak: Locator;
    readonly ukloniGumbKosaricaSvjetloZaBiciklu: Locator;
    readonly ukloniGumbKosaricaBoltMajica: Locator;
    readonly ukloniGumbKosaricaVunenaJaketa: Locator;
    readonly ukloniGumbKosaricaCrvenaMajica: Locator;
    readonly ukloniGumbKosaricaBodi: Locator;

    readonly ukloniGumbWebTrgovinaaRuksak: Locator;
    readonly ukloniGumbWebTrgovinaSvjetloZaBiciklu: Locator;
    readonly ukloniGumbWebTrgovinaBoltMajica: Locator;
    readonly ukloniGumbWebTrgovinaVunenaJaketa: Locator;
    readonly ukloniGumbWebTrgovinaCrvenaMajica: Locator;
    readonly ukloniGumbWebTrgovinaBodi: Locator;

    readonly nastavakKupovineGumb: Locator;

    constructor(page: Page) {
     this.page = page;
     this.dodajUkosaricuGumbRuksak = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
     this.dodajUKosaricuGumbSvjetloZaBiciklu = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
     this.dodajUkosaricuGumbBoltMajica = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
     this.dodajUkosaricuGumbVunenaJaketa = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
     this.dodajUkosaricuGumbBodi = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
     this.dodajUkosaricuGumbCrvenaMajica = page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');

     this.ikonaKosariceGumb = page.locator('#shopping_cart_container a');

     this.ukloniGumbKosaricaRuksak = page.locator('[data-test="remove-sauce-labs-backpack"]');
     this.ukloniGumbKosaricaSvjetloZaBiciklu = page.locator('[data-test="remove-sauce-labs-bike-light"]');
     this.ukloniGumbKosaricaBoltMajica = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
     this.ukloniGumbKosaricaVunenaJaketa = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
     this.ukloniGumbKosaricaCrvenaMajica = page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
     this.ukloniGumbKosaricaBodi = page.locator('[data-test="remove-sauce-labs-onesie"]');

     this.ukloniGumbWebTrgovinaaRuksak = page.locator('[data-test="remove-sauce-labs-backpack"]');
     this.ukloniGumbWebTrgovinaSvjetloZaBiciklu = page.locator('[data-test="remove-sauce-labs-bike-light"]');
     this.ukloniGumbWebTrgovinaBoltMajica = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
     this.ukloniGumbWebTrgovinaVunenaJaketa = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
     this.ukloniGumbWebTrgovinaCrvenaMajica = page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
     this.ukloniGumbWebTrgovinaBodi = page.locator('[data-test="remove-sauce-labs-onesie"]');

     this.nastavakKupovineGumb = page.locator('[data-test="continue-shopping"]');

    }
    
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
   }
}
