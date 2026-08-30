// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i);
//   }
//     console.log();
// }

//1
//22
//333
//4444
//55555

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String(i));
  }
  console.log();
}
