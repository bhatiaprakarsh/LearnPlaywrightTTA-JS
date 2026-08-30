import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //this returns a promise that why we usedawait keyword
  //page.locator()  -- we can use this function without await keyword bcoz it dont return any promise

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});