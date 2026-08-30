function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser Opened");
    });
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login Page loaded");
    });
}

function enterCred(){
    return new Promise(function(resolve){
        resolve("Cred entered");
    });
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Login Entered");
    });
}

async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step 1:" + msg1);

    let msg2 = await goToLogin();
    console.log("Step 2:" + msg2);

    let msg3 = await enterCred();
    console.log("Step 3:" + msg3);

    let msg4 = await clickLogin();
    console.log("Step 4:" + msg4);
}

runLoginFlow();