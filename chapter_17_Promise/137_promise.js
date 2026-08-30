let apiCall = new Promise(function(resolve, reject){
    resolve("The api call is made successfully!")
});

apiCall.then(function(response){
    console.log(response);
});