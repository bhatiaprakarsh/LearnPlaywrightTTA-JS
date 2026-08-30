let apiCall = new Promise(function(resolve, reject){
    reject("500 Error");
});

apiCall.then(function(data){
    console.log("Data is success");
}).catch((error)=>{
    console.log(error);
});