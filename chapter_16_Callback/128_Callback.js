function placeOrder(item, callback) {
    console.log("Oder placed");
    callback();
}

// This is the function call
placeOrder("Pizza", () => {
    console.log("Order is ready! Pick it up!");
});

// // This is the function call
// placeOrder("Pizza", function () {
//     console.log("Order is ready! Pick it up!");
// });
