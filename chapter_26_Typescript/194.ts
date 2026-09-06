function greet():never {
    while(true){
        console.log("Hello, World!");
    }
}

function greetN(msg: string): never {
    throw new Error(msg);
}