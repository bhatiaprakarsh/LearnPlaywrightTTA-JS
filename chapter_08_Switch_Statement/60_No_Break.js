// switch cases without break will continue executing the next cases.
// This is called fall-through behavior.

let color = "red";

switch (color) {
  case "red":
    console.log("Color is red");
  case "blue":
    console.log("Color is blue");
  default:
    console.log("Color is unknown");
}

// Example with number
let number = 2;

switch (number) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
