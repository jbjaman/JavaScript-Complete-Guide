let a = 34;

a = 45;

console.log(`let reassign: ${a}`); // 45 -> reassign: YES

const b = 56;

// b = 12;

// console.log(`const reassign: ${b}`); // TypeError -> reassign: NO

// let a = 55;

// console.log(`let redeclare: ${a}`); // SyntaxError -> redeclare: NO

// const b = 90;

// console.log(`const redeclare: ${b}`); // SyntaxError -> redeclare: NO

if (true) {
  let c = 39;

  const d = 22;

  console.log(`let Block Scope: ${c}`); // 39 -> Block Scope
  console.log(`const Block Scope: ${d}`); // 39 -> Block Scope
}

// console.log(`let Outside Block Scope: ${c}`); // ReferenceError: c is not defined -> let Block scope

// console.log(`const Outside Block Scope: ${d}`); // ReferenceError: d is not defined -> const Block scope

let letNum = 5;

const constNum = 7;

function functionScope(num1, num2) {
  let letNum = num1;

  const constNum = num2;

  console.log(`let Block/Function Scope: ${letNum}`); // 4 -> Block/Function Scope

  console.log(`const Block/Function Scope: ${constNum}`); // 8 -> Block/Function Scope
}

functionScope(4, 8);

console.log(`let outside Block/Function Scope: ${letNum}`); // 5 -> Block/Function Scope

console.log(`const outside Block/Function Scope: ${constNum}`); // 7 -> Block/Function Scope
