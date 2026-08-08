let nums = [1, 2, 3, 4, 5];
let result = nums.find(temp => temp > 3);
console.log(result); // Output: 4

let result2 = nums.findIndex(temp => temp > 3);
console.log(result2); // Output: 3

nums.findlast(temp => temp > 3); // This line seems to have a typo. It should probably be nums.findLast(temp => temp > 3);
console.log(result3); // Output: 5

nums.findLastIndex(temp => temp > 3); // This line seems to have a typo. It should probably be nums.findLastIndex(temp => temp > 3);
console.log(result4); // Output: 4