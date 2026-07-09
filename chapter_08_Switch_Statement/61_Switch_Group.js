// Grouped switch cases allow multiple cases to share the same output.

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
    console.log("This is a fruit");
    break;
  case "carrot":
    console.log("This is a vegetable");
    break;
  default:
    console.log("Unknown item");
}

// Another example with weekdays
let day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
