Prompt for Playwright code generation:

Generate a Playwright TypeScript test file to automate the Mettl login functionality at https://mettl.xyz.

Requirements:

1. Open the Mettl login page.
2. Verify that the page contains:
   - Email address field
   - Password field
   - Login button with text "Login to Mettl"
   - Forgot password link
   - Button "Login with Single Sign-On"
3. Test invalid login using a wrong email and password and verify the error message:
   - "You entered an incorrect email, password, or both. Need an account? Sign up"
4. Click the forgot password link and verify the page navigates to:
   - https://mettl.xyz/corporate/forgot-password
5. Use the valid login credentials:
   - Email: prakarsh.bhatia+3@mercer.com
   - Password: Mettl@12345
6. Login successfully and verify the user is redirected away from the login screen.
7. Use robust Playwright locators with role/text matching and fallback selectors.
8. Keep the code clean, readable, and reusable with `test.describe` and `test.beforeEach`.
9. Use TypeScript syntax compatible with Playwright Test.

Expected outcome:
A complete Playwright spec file with multiple login tests covering positive, negative, and navigation flows.
