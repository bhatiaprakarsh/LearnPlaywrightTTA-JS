// //Arrow Funcgtions in JS
// //Arrow functions are a more concise way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and provide a shorter syntax compared to traditional function expressions. 

// let myArrowFunction = () => {
//     console.log("Hello from myArrowFunction!"); // Function body
// };

// myArrowFunction(); // Calling the arrow function

// //Arrow function with parameters
// let greetUser = (name) => {
//     return "Hello " + name + "!"; // or return `Hello ${name}!`;
// }

// let greeting = greetUser("Alice"); // Calling the arrow function and using the returned value
// console.log(greeting);

// //Arrow function with implicit return (for single expression)
// let getGreeting = () => "Hello!"; // Implicit return
// console.log(getGreeting());

const getGreetingForUser = (name) => `Hello ${name}!`; // Implicit return with template literals
console.log(getGreetingForUser("Bob"));

const getResult = (score) => score >= 50 ? "Pass" : "Fail"; // Using ternary operator for conditional return
console.log(getResult(75));

const getResultWithIfElse = (score) => {
    if (score >= 50) return "Pass";
    return "Fail";
}
console.log(getResultWithIfElse(75));