//TRANSFORM - MAP, FILTER, REDUCE

let scores = [82, 8, 68, 99, 95, 75, 33, 91, 44, 100];

//MAP- transforms each element in the array
//Calls a defined callback function on each element of an array, and returns an array that contains the results.
let grade = scores.map(s=>s>70 ? "PASS" : "FAIL");
console.log(grade);

//FILTER - filters the array based on a condition
//Creates a new array with all elements that pass the test implemented by the provided function.
let pass = scores.filter(s=>s>70);
console.log(pass); //will take out values grater than equal to 70

//REDUCE - reduces the array to a single value
//Calls the specified callback function on each element of the array, and returns a value that represents the result of the callback function.
let total = scores.reduce((sum, s) => sum + s, 0); //0 is sum initial value will start from 0 and add all the values in the array
console.log(total);