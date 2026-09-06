class Credentials {
    #apiKey;
    user;

    constructor(key, user) {
        this.#apiKey = key;
        this.user = user;
    }

    getApiKey() {
        return this.#apiKey;
    }
}

let myCredentials = new Credentials("12345", "JohnDoe");
console.log(myCredentials.user);
//console.log(myCredentials.#apiKey); // This will throw an error because #apiKey is private
console.log(myCredentials.getApiKey());