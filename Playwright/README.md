# Mettl Login Automation

This folder contains a Playwright-based automation project for testing the Mettl login workflow.

## Quick Start

1. Open the terminal in this folder.
2. Install dependencies if required:
   ```bash
   npm install
   ```
3. Run the test file:
   ```bash
   npx playwright test tests/mettl-login.spec.ts --project=chromium
   ```
4. Open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Included Files

- `tests/mettl-login.spec.ts` - automated login checks
- `login-test-cases.md` - detailed test case documentation
- `login-prompt.md` - reusable AI prompt for generating Playwright test code
- `cheat-sheet.md` - quick locator and command reference

## Test Coverage

- Login form visibility
- Invalid login validation
- Forgot password redirection
- Successful login with valid credentials

## Important URL

- Login page: https://mettl.xyz/corporate/login
- Forgot password: https://mettl.xyz/corporate/forgot-password

## Valid Credentials

- Email: prakarsh.bhatia+3@mercer.com
- Password: Mettl@12345
