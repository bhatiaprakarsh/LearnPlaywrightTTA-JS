console.log(a);
let a = 5;
console.log(a);

//let hoisting does not exist, so the first console.log will throw a ReferenceError because 'a' is not defined at that point in the code. The variable 'a' is declared using 'let', which does not hoist the variable to the top of its scope like 'var' does.

// let does not allow hoisting, so the first console.log will throw a ReferenceError because 'a' is not defined at that point in the code. The variable 'a' is declared using 'let', which does not hoist the variable to the top of its scope like 'var' does.

//LET follows TDZ (Temporal Dead Zone) rules, which means that the variable 'a' is in a "dead zone" from the start of the block until the declaration is encountered. Accessing it before the declaration results in a ReferenceError.