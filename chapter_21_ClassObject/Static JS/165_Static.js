class TestRunner {
    static totalTests = 0;
    static passedTests = 0;

    constructor(name, passed) {
        TestRunner.totalTests++;
        if (passed) {
            TestRunner.passedTests++;
        }
    }
}

let test1 = new TestRunner("Test 1", true);
let test2 = new TestRunner("Test 2", false);
let test3 = new TestRunner("Test 3", true);

// let t1 = new TestRunner(); // This will throw an error because TestRunner is a static class and cannot be instantiated with 'new' outside of its own context

console.log(`Total Tests: ${TestRunner.totalTests}`);
console.log(`Passed Tests: ${TestRunner.passedTests}`);