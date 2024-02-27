import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/login.page';
import { Narudzba } from '../pages/narudzba.page';
import { Kosarica } from '../pages/kosarica.page';

test.describe('testiranje izrade narudžbe i računa s korisnikom problem_user', () => {

    test.beforeEach(async ({page}) => {
        const login = new LogIn(page);
        await login.goto();
        await login.korisnickoIme.fill("problem_user");
        await login.lozinka.fill("secret_sauce");
        await login.logInGumb.click();
    });

    test('testiranje nemogućnosti dovršetka narudžbe s nula proizvoda', async ({ page }) => {
        const narudzba= new Narudzba(page);
        await narudzba.ikonaKoSariceGumb.click();
        await narudzba.checkoutGumb.click();
        await narudzba.poljeIme.fill("Ana");
        await narudzba.poljePrezime.fill("Milin");
        await narudzba.poljePostanskiBroj.fill("21000");
        await narudzba.gumbNastavi.click();
        await narudzba.gumbZavrsi.click();
        await expect(page.locator('#checkout_complete_container')).not.toBeVisible();
    });
    
    test('testiranje informacijskog obrasca s podacima o kupcu koji nisu validni i dovršetak narudžbe', async ({ page }) => {
        const narudzba= new Narudzba(page);
        await narudzba.ikonaKoSariceGumb.click();
        await narudzba.checkoutGumb.click();
        await narudzba.poljeIme.fill("2");
        await narudzba.poljePrezime.fill("2");
        await narudzba.poljePostanskiBroj.fill("2");
        await narudzba.gumbNastavi.click();
        await expect(page.locator('.error-message-container')).toHaveText("Error: Customer information is not valid");
    });

    test('ispunjavanje informacijskog obrasca validnim vrijednostima i dovršetak narudžbe', async ({ page }) => {
        const kosarica= new Kosarica(page);
        const narudzba= new Narudzba(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await kosarica.dodajUkosaricuGumbBoltMajica.click();
        await kosarica.dodajUkosaricuGumbVunenaJaketa.click();
        await kosarica.dodajUkosaricuGumbBodi.click();
        await kosarica.dodajUkosaricuGumbCrvenaMajica.click();
        await kosarica.ikonaKosariceGumb.click();
        await narudzba.checkoutGumb.click();
        await narudzba.poljeIme.fill("Ana");
        await narudzba.poljePrezime.fill("Milin");
        await narudzba.poljePostanskiBroj.fill("21000");
        await narudzba.gumbNastavi.click();
        await narudzba.gumbZavrsi.click();
        await expect(page).toHaveURL(/.*checkout-complete.html/);
        await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    });

    test('provjera točnosti ukupne sume računa sa šest proizvoda', async ({ page }) => {
        const kosarica= new Kosarica(page);
        const narudzba= new Narudzba(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await kosarica.dodajUkosaricuGumbBoltMajica.click();
        await kosarica.dodajUkosaricuGumbVunenaJaketa.click();
        await kosarica.dodajUkosaricuGumbBodi.click();
        await kosarica.dodajUkosaricuGumbCrvenaMajica.click();
        await kosarica.ikonaKosariceGumb.click();
        await narudzba.checkoutGumb.click();
        await narudzba.poljeIme.fill("Ana");
        await narudzba.poljePrezime.fill("Milin");
        await narudzba.poljePostanskiBroj.fill("21000");
        await narudzba.gumbNastavi.click();
        await expect(page.getByText('Total: $140.34')).toHaveText("Total: $140.34");
    });

    test('provjera hoće li podaci o kupcu ostati spremljeni pri povratku s pregleda konačne narudžbe na informacijski obrazac', async ({ page }) => {
        const kosarica= new Kosarica(page);
        const narudzba= new Narudzba(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await kosarica.dodajUkosaricuGumbBoltMajica.click();
        await kosarica.dodajUkosaricuGumbVunenaJaketa.click();
        await kosarica.dodajUkosaricuGumbBodi.click();
        await kosarica.dodajUkosaricuGumbCrvenaMajica.click();
        await kosarica.ikonaKosariceGumb.click();
        await narudzba.checkoutGumb.click();
        await narudzba.poljeIme.fill("Ana");
        await narudzba.poljePrezime.fill("Milin");
        await narudzba.poljePostanskiBroj.fill("21000");
        await narudzba.gumbNastavi.click();
        await narudzba.ponistiGumb.click();
        await expect(page).toHaveURL(/.*checkout-step-one.html/);
        await expect(page.locator('.checkout_info')).toHaveText("Ana Milin 21000");  
    });
});