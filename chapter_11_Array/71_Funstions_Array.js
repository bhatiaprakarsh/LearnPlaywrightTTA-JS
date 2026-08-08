// let arr = [1, 2, 3, 4, 5];

// arr.push(6); // add 6 to the end of the array
// console.log(arr); // [1, 2, 3, 4, 5, 6]

// arr.push(7, 8); // add 7 and 8 to the end of the array
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]  

// arr.pop(); // remove the last element from the array
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7] 

// arr.unshift(0); // add 0 to the beginning of the array
// console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7]

// arr.shift(); // remove the first element from the array
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

// arr.splice(3, 2); // remove 2 elements starting from index 3
// console.log(arr); // [1, 2, 3, 6, 7]

// arr.splice(2, 0, 4, 5); // add 4 and 5 starting from index 2
// console.log(arr); // [1, 2, 4, 5, 3, 6, 7] 



// let arr = [10, 11, 12, 13];

// arr.reverse(); // reverse the order of the elements in the array
// console.log(arr); // [13, 12, 11, 10]

// arr.splice(2,1);
// console.log(arr); // [13, 12, 10]

// arr.push(11, 12, 13, 14, 15);
// console.log(arr); // [13, 12, 10, 11, 12, 13, 14, 15]

// arr.sort(); // sort the elements in ascending order
// console.log(arr); // [10, 11, 12, 12, 13, 13, 14, 15]

// arr.spine(2, 4, 14.5); // This line seems to have a typo. It should probably be arr.splice(2, 4, 14.5);
// console.log(arr); // [10, 11, 14.5, 15]

let arr = [10, 11, 12,12, 13, 13, 14, 15];

arr.splice(2, 4, 14.5);
console.log(arr); // [10, 11, 14.5,14, 15]