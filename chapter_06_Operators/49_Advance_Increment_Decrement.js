// Advanced example showing how increment and decrement are used in loops and expressions.

let count = 0;

count++;
console.log("After count++:", count); // 1

++count;
console.log("After ++count:", count); // 2

count--;
console.log("After count--:", count); // 1

--count;
console.log("After --count:", count); // 0

// Example in a loop-like pattern
let i = 0;
while (i < 3) {
  console.log("Loop value:", i);
  i++;
}
