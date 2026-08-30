// function placeOrder(item, callback){
//     console.log("Oder Placed");
//     callback();
// }

// placeOrder("Pizza", function(){                      // Annatonus function
//     console.log("Order ready! Pick it up");
// });


//2nd way to write the above code is

// function placeOrder(item, callback){
//     console.log("Oder Placed");
//     callback();
// }

// //function defination
// function orderReady(){
//     console.log("Order ready! Pick it up");
// }

// //function call
// placeOrder("Pizza", orderReady);

//3rd way to write the above code is and the most wide used way is

function placeOrder(item, callback){
    console.log("Oder Placed");
    callback();
}

placeOrder("Burger", () => {
    console.log("Order ready! Pick it up");
});


//example
// test("Test case 1", async ({page}) =>{

// });