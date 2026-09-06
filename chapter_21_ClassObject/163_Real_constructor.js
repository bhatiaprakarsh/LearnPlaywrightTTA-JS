class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + " " + this.status + " " + this.priority);
    }
}

let loginTest = new TestCase("Login Test", "Pass", "High");
let signUpTest = new TestCase("Signup Test", "Fail", "Medium");

console.log(loginTest.name);
loginTest.display();

signUpTest.display();