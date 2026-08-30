async function runTest(){
    let result = await Promise.resolve("Login test passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

runTest();


//old method 
// let apiCall = new Promise(function(resolve, reject){
//               resolve("Login test passed");
// });

// let result2 = await apiCall();
