// Real-world example: login access based on user role

let userRole = "editor";

if (userRole === "admin") {
  console.log("Admin can do all things.");
} else if (userRole === "editor") {
  console.log("Welcome Editor - edit access granted.");
} else if (userRole === "viewer") {
  console.log("Viewer - view access only.");
} else {
  console.log("You may be a guest role. Access denied.");
}

// Another example with a different role
userRole = "admin";

if (userRole === "admin") {
  console.log("Admin can do all things.");
} else if (userRole === "editor") {
  console.log("Welcome Editor - edit access granted.");
} else if (userRole === "viewer") {
  console.log("Viewer - view access only.");
} else {
  console.log("You may be a guest role. Access denied.");
}
