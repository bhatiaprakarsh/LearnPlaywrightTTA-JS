//Function as an expression
let myFunction = function() {
    console.log("Hello from myFunction!"); // Function body
};

myFunction(); // Calling the function

let greetUser = function(name) {
    console.log("Hello");
    return "Hello " + name + "!"; // or return `Hello ${name}!`;
}

let greeting = greetUser("Alice"); // Calling the function and using the returned value
console.log(greeting);