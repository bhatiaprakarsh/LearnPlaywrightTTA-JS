function test(testCase, callMeWhenDone){
    console.log("Hi, start the testcase: ", testCase);
    callMeWhenDone();
}

test("Test case 1", () => {
    console.log("Test case 1 is done");
});



function ishaShopping(item, callMe){
    console.log("Store is open");
    console.log("Shopping for:", item);
    callMe();
}

ishaShopping("Shoes", () => {
    console.log("Shopping is done");
});