// SORT - used to sort array ascending or descending order


let scores = [10, 11, 1, 5, 2, 23, 55, 7];

//SORT - if we use scores.sort() it will sort on the basis of first digit of the number, so we need to use a compare function to sort the array in ascending or descending order
let sortedScores = scores.sort();
console.log(sortedScores); //will sort on the basis of first digit of the number

//Ascending order
let ascending = scores.sort((a, b) => a - b);
console.log(ascending);

//Descending order
let descending = scores.sort((a, b) => b - a);
console.log(descending);