import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/login.page';
import { Menu } from '../pages/menu.page';
import { Kosarica } from '../pages/kosarica.page';

test.describe('testiranje menua stranice s korisnikom problem_user', () => {
    test.beforeEach(async ({page}) => {
        const login = new LogIn(page);
        await login.goto();
        await login.korisnickoIme.fill("problem_user");
        await login.lozinka.fill("secret_sauce");
        await login.logInGumb.click();
    });
    
    test('testiranje gumba All Items unutar menua', async ({ page }) => {
        const menu = new Menu(page);
        await menu.menuGumb.click();
        await menu.sviProizvodiGumb.click();
        await expect(page.locator('.inventory_list')).toBeVisible()
    });
    
    test('testiranje gumba About unutar menua', async ({ page }) => {
        const menu = new Menu(page);
        await menu.menuGumb.click();
        await menu.oNamaGumb.click()
        await expect(page).not.toHaveURL("https://saucelabs.com/error/404");
    });

    test('testiranje gumba Reset App State unutar menua', async ({ page }) => {
        const kosarica = new Kosarica(page);
        const menu = new Menu(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await menu.menuGumb.click();
        await menu.resetirajStanjeAplikacijeGumb.click();
        await menu.zatvoriMenuGumb.click();
        await expect(kosarica.dodajUkosaricuGumbRuksak).toBeVisible();
        await expect(kosarica.dodajUKosaricuGumbSvjetloZaBiciklu).toBeVisible();
    });
});