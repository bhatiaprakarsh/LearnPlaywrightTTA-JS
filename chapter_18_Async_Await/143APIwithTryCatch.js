async function apiCall(){
    try{
        let res = await Promise.reject("503 error sevice unavailable");
        console.log('Result',   res);
    }catch{
        console.log('Error',  error);
    }finally{
        console.log("Clean Up!!");
    }
}

apiCall();