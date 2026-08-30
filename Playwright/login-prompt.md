# Playwright Prompt for Mettl Login Automation

Generate a Playwright TypeScript test file to automate the Mettl login flow at https://mettl.xyz/corporate/login.

## Requirements

1. Navigate to the Mettl login page.
2. Verify the login form includes:
   - Email Address field
   - Password field
   - Button named "Login to Mettl"
   - Button named "Login with Single Sign-On"
   - Forgot Password link
3. Test invalid credentials by entering a wrong email and password.
4. Verify the validation message appears:
   - "You entered an incorrect email, password, or both"
5. Click the forgot password link and verify the URL changes to /corporate/forgot-password.
6. Use valid credentials:
   - Email: prakarsh.bhatia+3@mercer.com
   - Password: Mettl@12345
7. Submit the valid form and confirm the page is no longer on the corporate login page.
8. Use Playwright best practices with `test.describe`, `test.beforeEach`, and resilient locators.
9. Keep the code readable, reusable, and TypeScript-compatible.

## Expected Outcome

A complete Playwright spec with positive and negative login tests covering login validation, forgot password flow, and successful login.
