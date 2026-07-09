// User input can be taken in Node.js using the readline module.
// This example asks the user for their name and prints a greeting.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
