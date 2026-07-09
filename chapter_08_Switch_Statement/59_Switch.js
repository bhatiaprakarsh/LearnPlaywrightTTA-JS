// switch statement is used when you want to compare one value against many cases.
// It is cleaner than writing many if-else statements.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}

// Example with a month name
let month = "June";

switch (month) {
  case "January":
    console.log("Winter");
    break;
  case "June":
    console.log("Summer");
    break;
  default:
    console.log("Other month");
}
