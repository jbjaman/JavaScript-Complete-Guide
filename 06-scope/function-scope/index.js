// 1. Function Scope

function createUser() {
  const userId = 234;

  console.log(userId);
}

console.log(userId); // X invalid

// 2.

function test() {
  var age = 25;

  console.log(age); // 25
}

test();

console.log(age); // Error
