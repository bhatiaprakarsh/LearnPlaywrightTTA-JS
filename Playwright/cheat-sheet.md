# Playwright Cheat Sheet

## Common Commands

```bash
npx playwright test
npx playwright test tests/mettl-login.spec.ts
npx playwright test tests/mettl-login.spec.ts --project=chromium
npx playwright test --headed
npx playwright show-report
```

## Useful Locators

```ts
page.getByPlaceholder("Email Address");
page.getByPlaceholder("Password ");
page.getByRole("button", { name: /login to mettl/i });
page.getByRole("link", { name: /forgot password/i });
page.getByText(/You entered an incorrect email, password, or both/i);
```

## Common Assertions

```ts
await expect(page).toHaveTitle(/Login to conduct online tests/i);
await expect(page.getByPlaceholder("Email Address")).toBeVisible();
await expect(
  page.getByRole("button", { name: /login to mettl/i }),
).toBeVisible();
await expect(page).toHaveURL(/\/corporate\/forgot-password/i);
await expect(
  page.getByText(/You entered an incorrect email, password, or both/i).first(),
).toBeVisible();
```

## Form Interaction

```ts
await page
  .getByPlaceholder("Email Address")
  .fill("prakarsh.bhatia+3@mercer.com");
await page.getByPlaceholder("Password ").fill("Mettl@12345");
await page
  .getByRole("button", { name: /login to mettl/i })
  .click({ force: true });
```

## Best Practices

- Prefer user-facing locators like `getByRole`, `getByPlaceholder`, and `getByText`
- Use `test.describe` and `test.beforeEach` for structured tests
- Add explicit waits for validation messages and routing changes
- Keep credentials in constants or environment variables when possible
- Run the suite in Chromium when targeting a single browser environment
