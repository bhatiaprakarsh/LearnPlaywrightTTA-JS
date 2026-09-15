interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameField: string;
    passwordField: string;
    loginButton: string;
}

interface HomePage extends BasePage {
    welcomeMessage: string;
    logoutButton: string;
}

const loginPage: LoginPage = {
    url: "https://example.com/login",
    title: "Login Page",
    usernameField: "username",
    passwordField: "password",
    loginButton: "login"
};

const homePage: HomePage = {
    url: "https://example.com/home",
    title: "Home Page",
    welcomeMessage: "Welcome, John!",
    logoutButton: "logout"
};

console.log(loginPage);
console.log(loginPage.url); // Output: https://example.com/login
console.log(loginPage.title); // Output: Login Page
console.log(homePage);
console.log(homePage.welcomeMessage); // Output: Welcome, John!