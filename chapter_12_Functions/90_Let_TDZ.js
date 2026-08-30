//LET TDZ - Temporal Dead Zone: is a time between the entering of the scope/block and the actual declaration of the variable. During this time, the variable is in a "dead zone" and cannot be accessed or used. If you try to access it, you'll get a ReferenceError.
//In this example, we are trying to access the variable myVar before it is declared. This will throw a ReferenceError because myVar is in the temporal dead zone.
console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!