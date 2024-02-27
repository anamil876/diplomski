import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/login.page';
import { Logout } from '../pages/logout.page';


test.describe('testiranje log out stranice s korisnikom standard_user', () => {

    test.beforeEach(async ({page}) => {
        const login= new LogIn(page);
        await login.goto();
        await login.korisnickoIme.fill("standard_user");
        await login.lozinka.fill("secret_sauce");
        await login.logInGumb.click();
    });

    test('testiranje log out stranice sa standard_userom', async ({ page }) => {
        const logout = new Logout(page);
        await logout.menuGumb.click();
        await logout.logOutGumb.click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(logout.logInGumb).toBeVisible();
    });
});