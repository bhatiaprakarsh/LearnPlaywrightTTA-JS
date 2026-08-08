//SLICE:

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//arr.slice(start, end-1) - start is the index at which to begin extraction, and end is the index at which to end extraction. The original array will not be modified.

let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Orange", "Lemon"]


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let slicedNums = nums.slice(2, 5);
console.log(slicedNums); // Output: [3, 4, 5]

let slicedNums2 = nums.slice(4);
console.log(slicedNums2); // Output: [5, 6, 7, 8, 9]

let slicedNums3 = nums.slice(-3);
console.log(slicedNums3); // Output: [7, 8, 9]