let arr = [10, 11, 12, 13, 14 ,15];

// for(let i =0;i<arr.length; i++){
//     console.log(i, arr[i]);
// }

arr.forEach((value, index) => {
    console.log(index, value);
});

arr.forEach((value, index) => {
    console.log(`${index}, ${value}`);
});





// 0 10
// 1 11
// 2 12
// 3 13
// 4 14
// 5 15

//there will be seperate OP 
// 0, 10
// 1, 11
// 2, 12
// 3, 13
// 4, 14
// 5, 15

