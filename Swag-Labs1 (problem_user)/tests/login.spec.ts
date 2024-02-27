import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/login.page';

test.describe('testiranje log in stranice Swag Labs', () => {
  
  test('testiranje log in stranice sa standard_userom', async ({ page }) => {
    const login = new LogIn(page);
    await login.goto();
    await login.korisnickoIme.fill("standard_user");
    await login.lozinka.fill("secret_sauce");
    await login.logInGumb.click();
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
    await expect(page).toHaveURL(/.*inventory.html/)
  });

  test('testiranje log in stranice sa problem_userom', async ({ page }) => {
    const login = new LogIn(page);
    await login.goto();
    await login.korisnickoIme.fill("problem_user");
    await login.lozinka.fill("secret_sauce");
    await login.logInGumb.click();
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('testiranje log in stranice sa locked_out_userom', async ({ page }) => {
    const login = new LogIn(page);
    await login.goto();
    await login.korisnickoIme.fill("locked_out_user");
    await login.lozinka.fill("secret_sauce");
    await login.logInGumb.click();
    await expect(page.locator('data-test="error"')).toBeVisible();
  });

  test('testiranje log in stranice sa podacima koji nisu prihvaćeni kao korisničko ime i lozinka', async ({ page }) => {
    const login = new LogIn(page);  
    await login.goto();
    await login.korisnickoIme.fill("Ana123!");
    await login.lozinka.fill("Ana123!");
    await login.logInGumb.click();
    await expect(page.locator('#shopping_cart_container a')).not.toBeVisible();
    await expect(page).not.toHaveURL(/.*inventory.html/);
  });
});


