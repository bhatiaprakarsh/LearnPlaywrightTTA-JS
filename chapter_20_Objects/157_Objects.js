let aa = {status: "PASS", score: 100};

console.log(aa.status);
console.log(aa.score);

let b = aa;   /// copy the reference of aa to b, so b is pointing to the same object as aa.

console.log(b.status);

b.status = "FAIL";

console.log(b.status);
console.log(aa.status);

//b copy is the reference to the same object as aa, so when we change b.status, it also changes aa.status.