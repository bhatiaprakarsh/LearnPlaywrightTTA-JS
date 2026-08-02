console.log("While loop example:");
let count = 0;
while (count < 0) {
    console.log("This line will never run.");
    count++;
}

console.log("\nDo...while loop example:");
let value = 0;
do {
    console.log("This line runs at least once.");
    value++;
} while (value < 0);

console.log("\nDifference:");
console.log("- while loop checks the condition first.");
console.log("- do...while loop runs the body once before checking the condition.");
