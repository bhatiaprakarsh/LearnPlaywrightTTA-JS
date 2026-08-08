import { test, expect } from '@playwright/test';

test('VWO invalid login should show the expected authentication error', async ({ page }) => {
  await page.goto('https://app.vwo.com/#/login');

  await expect(page).toHaveTitle(/Login - Wingify/i);

  await page.getByRole('textbox', { name: 'Email address' }).fill('invalid@wingify.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpass');

  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  await expect(
    page.getByText(/Your email, password, IP address or location did not match/i)
  ).toBeVisible({ timeout: 10000 });
});
