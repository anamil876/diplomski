import { test, expect } from '@playwright/test';
import { Kosarica } from '../pages/kosarica.page';
import { LogIn } from '../pages/login.page';

test.describe('testiranje košarice s korisnikom standard_user', () => {

    test.beforeEach(async ({page}) => {
        const login= new LogIn(page);
        await login.goto();
        await login.korisnickoIme.fill("standard_user");
        await login.lozinka.fill("secret_sauce");
        await login.logInGumb.click();
    });

    test('Provjera mogućnosti micanja svih proizvoda iz košarice klikom na gumb Remove (ukloni) unutar košarice', async ({ page }) => {
        const kosarica= new Kosarica(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await kosarica.dodajUkosaricuGumbBoltMajica.click();
        await kosarica.dodajUkosaricuGumbVunenaJaketa.click();
        await kosarica.dodajUkosaricuGumbBodi.click();
        await kosarica.dodajUkosaricuGumbCrvenaMajica.click();
        await kosarica.ikonaKosariceGumb.click();
        await expect(kosarica.ukloniGumbKosaricaRuksak).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaSvjetloZaBiciklu).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBoltMajica).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaVunenaJaketa).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBodi).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaCrvenaMajica).toBeVisible();
        await kosarica.ukloniGumbKosaricaRuksak.click();
        await kosarica.ukloniGumbKosaricaSvjetloZaBiciklu.click();
        await kosarica.ukloniGumbKosaricaBoltMajica.click();
        await kosarica.ukloniGumbKosaricaVunenaJaketa.click();
        await kosarica.ukloniGumbKosaricaBodi.click();
        await kosarica.ukloniGumbKosaricaCrvenaMajica.click();
        await expect(kosarica.ukloniGumbKosaricaRuksak).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaSvjetloZaBiciklu).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBoltMajica).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaVunenaJaketa).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBodi).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaCrvenaMajica).not.toBeVisible();
    });

    test('Provjera mogućnosti micanja svih proizvoda iz košarice klikom na gumb Remove (ukloni) na web trgovini', async ({page}) => {
        const kosarica= new Kosarica(page);
        await kosarica.dodajUkosaricuGumbRuksak.click();
        await kosarica.dodajUKosaricuGumbSvjetloZaBiciklu.click();
        await kosarica.dodajUkosaricuGumbBoltMajica.click();
        await kosarica.dodajUkosaricuGumbVunenaJaketa.click();
        await kosarica.dodajUkosaricuGumbBodi.click();
        await kosarica.dodajUkosaricuGumbCrvenaMajica.click();
        await kosarica.ikonaKosariceGumb.click();
        await expect(kosarica.ukloniGumbKosaricaRuksak).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaSvjetloZaBiciklu).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBoltMajica).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaVunenaJaketa).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBodi).toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaCrvenaMajica).toBeVisible();
        await kosarica.nastavakKupovineGumb.click();
        await kosarica.ukloniGumbWebTrgovinaaRuksak.click();
        await kosarica.ukloniGumbWebTrgovinaSvjetloZaBiciklu.click();
        await kosarica.ukloniGumbWebTrgovinaBoltMajica.click();
        await kosarica.ukloniGumbWebTrgovinaVunenaJaketa.click();
        await kosarica.ukloniGumbWebTrgovinaCrvenaMajica.click();
        await kosarica.ukloniGumbWebTrgovinaBodi.click();
        await kosarica.ikonaKosariceGumb.click();
        await expect(kosarica.ukloniGumbKosaricaRuksak).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaSvjetloZaBiciklu).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBoltMajica).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaVunenaJaketa).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaBodi).not.toBeVisible();
        await expect(kosarica.ukloniGumbKosaricaCrvenaMajica).not.toBeVisible();
    });
});
