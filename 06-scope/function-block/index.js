// 1. Function Scope

function createUser() {
  const userId = 234;

  console.log(userId);
}

console.log(userId); // X invalid

// 2. Block Scope

if (true) {
  const message = "Hello";
  console.log(message);
}

console.log(message); // X iinvalid
