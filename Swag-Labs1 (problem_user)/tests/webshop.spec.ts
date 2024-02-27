import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/login.page';
import { WebShop } from '../pages/webshop.page';


test.describe('testiranje web shopa s korisnikom problem_user', () => {
    test.beforeEach(async ({page}) => {
        const login = new LogIn(page);
        await login.goto();
        await login.korisnickoIme.fill("problem_user");
        await login.lozinka.fill("secret_sauce");
        await login.logInGumb.click();
    });

    test('testiranje vidljivosti ikone Košarica', async ({ page }) => {
        const webshop = new WebShop(page);
        await expect(webshop.ikonaKosariceGumb).toBeVisible();
    });

    test('testiranje vidljivosti ikone Menu', async ({ page }) => {
        const webshop = new WebShop(page);
        await expect(webshop.menuGumb).toBeVisible();
    });

    test('testiranje vidljivosti teksta Swag Labs', async ({ page }) => {
        const webshop = new WebShop(page);
        await expect(webshop.naslovStranice).toBeVisible();
    });

    test('testiranje vidljivosti slike proizvoda, naziva proizvoda, opisa proizvoda, cijene i gumba "Add to cart" ', async ({ page }) => {
        const webshop = new WebShop(page);
        await expect(webshop.kartica).toBeVisible();
        await expect(webshop.slika).toBeVisible();
        await expect(webshop.cijena).toBeVisible();
        await expect(webshop.naziv).toBeVisible();
        await expect(webshop.opis).toBeVisible();
        await expect(webshop.dodajUkosaricuGumb).toBeVisible();
    });
    
    test('testiranje vidljivosti filtera ', async ({ page }) => {
        const webshop = new WebShop(page);
        await webshop.filterGumb.click();
        await expect(webshop.filterGumb).toBeVisible();
    });
});