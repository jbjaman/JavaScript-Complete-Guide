// 1. Block Scope

if (true) {
  const message = "Hello";
  console.log(message);
}

console.log(message); // X iinvalid

// 2.

if (true) {
  let age = 25;
  const name = "Rahim";
}

console.log(age); // Error
console.log(name); // Error

// 3.

if (true) {
  var age = 25;
}

console.log(age); // 25 -> var block-scoped নয়।
