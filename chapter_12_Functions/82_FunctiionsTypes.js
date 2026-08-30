//Types of functions in JS
//1. No return value and no parameters
function greet() {
    console.log("Hello!");
}

//2. No return value but with parameters
function greetUser(name) {
    console.log("Hello" + name + "!"); // or console.log(`Hello ${name}!`);
}

//3. With return value and no parameters
function getGreeting() {
    return "Hello!";
}

//4. With return value and with parameters
function getGreetingForUser(name) {
    return "Hello " + name + "!"; // or return `Hello ${name}!`;
}