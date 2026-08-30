# Mettl Login Test Cases

## Objective

Validate the login flow for the Mettl corporate login page:
https://mettl.xyz/corporate/login

## Functional Coverage

### 1. Login page rendering

- Open the login page
- Verify the page title is displayed
- Validate the following fields are visible:
  - Email Address
  - Password
  - Login to Mettl button
  - Login with Single Sign-On button
  - Forgot Password link

### 2. Invalid login validation

- Enter a wrong email address
- Enter an invalid password
- Click the Login to Mettl button
- Verify the error message appears:
  - "You entered an incorrect email, password, or both"

### 3. Forgot password navigation

- Click the Forgot Password link
- Confirm navigation to:
  - https://mettl.xyz/corporate/forgot-password

### 4. Successful login with valid credentials

- Enter the registered email address:
  - prakarsh.bhatia+3@mercer.com
- Enter the valid password:
  - Mettl@12345
- Click Login to Mettl
- Verify the user is redirected away from the login page

## Test Data

### Valid credentials

- Email Address: prakarsh.bhatia+3@mercer.com
- Password: Mettl@12345

### Invalid credentials

- Email Address: wrong.user@example.com
- Password: WrongPassword@123

## Acceptance Criteria

- Login form loads without errors
- Invalid login shows the correct error banner
- Password recovery page opens correctly
- Valid login redirects the user successfully
- Automation is stable across the configured browser
