import { test, expect } from '@playwright/test';

const validEmail = 'prakarsh.bhatia+3@mercer.com';
const validPassword = 'Mettl@12345';

test.describe('Mettl login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://mettl.xyz/corporate/login');
    await expect(page).toHaveTitle(/Login to conduct online tests/i);
  });

  test('should display the login form with required fields and buttons', async ({ page }) => {
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Password ')).toBeVisible(); 
    await expect(page.getByRole('button', { name: /login to mettl/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /login with single sign-on/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /forgot password/i })).toBeVisible();
  });

  test('should show validation message for incorrect email or password', async ({ page }) => {
    await page.getByPlaceholder('Email Address').fill('wrong.user@example.com');
    await page.getByPlaceholder('Password ').fill('WrongPassword@123');
    await page.getByRole('button', { name: /login to mettl/i }).click({ force: true });

    const errorMessage = page.getByText(/You entered an incorrect email, password, or both/i).first();
    await expect(errorMessage).toBeVisible({ timeout: 20000 });
  });

  test('should navigate to the forgot password page', async ({ page }) => {
    await page.getByRole('link', { name: /forgot password/i }).click();
    await expect(page).toHaveURL(/\/corporate\/forgot-password/i);
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Email Address').fill(validEmail);
    await page.getByPlaceholder('Password ').fill(validPassword);
    await page.getByRole('button', { name: /login to mettl/i }).click({ force: true });

    await expect(page).not.toHaveURL(/\/corporate\/login$/i, { timeout: 30000 });
  });
});
