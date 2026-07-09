// Real-world example: handling API response status codes

let statusCode = 200;

if (statusCode === 200) {
  console.log("Request successful. Data loaded.");
} else if (statusCode === 404) {
  console.log("Page not found. Check the URL.");
} else {
  console.log("Unexpected status code.");
}

// Another example with 404
statusCode = 404;

if (statusCode === 200) {
  console.log("Request successful. Data loaded.");
} else if (statusCode === 404) {
  console.log("Page not found. Check the URL.");
} else {
  console.log("Unexpected status code.");
}
