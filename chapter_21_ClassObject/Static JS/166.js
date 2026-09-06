class TestRunner {
    static totalCount = 0;
    static passedCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalCount++;
        if (passed) {
            TestRunner.passedCount++;
        }
    }

    nonStaticMethod() {
        return this.name;
    }

    static summary() {
        return TestRunner.passedCount + " out of " + TestRunner.totalCount + " tests passed.";
    }
}

new TestRunner("Login Test", true);
new TestRunner("Signup Test", false);
new TestRunner("Cart Test", true);
new TestRunner("Checkout Test", true);

console.log(TestRunner.summary()); // Output: 3 out of 4 tests passed.