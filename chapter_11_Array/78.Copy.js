//SPREAD
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2); // [1, 2, 3]

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let ar3 = [...ar1, ...ar2];
console.log(ar3); // [1, 2, 3, 4, 5, 6]

//COPY METHODS

//METHOD 1
let arr = [1, 2, 3];
let arr2 = arr.slice();
console.log(arr2); // [1, 2, 3]

//METHOD 2
let arr = [1, 2, 3];
let arr2 = Array.from(arr);
console.log(arr2); // [1, 2, 3]

//METHOD 3
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2); // [1, 2, 3]

//METHOD 4
let arr = [1, 2, 3];
let arr2 = arr.concat();
console.log(arr2); // [1, 2, 3]

//METHOD 5
let arr = [1, 2, 3];
let arr2 = arr.map(x => x);
console.log(arr2); // [1, 2, 3]