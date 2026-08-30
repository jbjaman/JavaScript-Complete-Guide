// 1. empty string falsy

const username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username missing");
}

// 2. truthy

if ([]) {
  console.log("Runs");
}
