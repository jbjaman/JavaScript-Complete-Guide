// Destructuring

const user = {
  name: "MAshle",
  role: "user",
  age: 23,
};

const { name, role, age } = user;

console.log(name);
console.log(role);
console.log(age);

// Array Destructuring

const user98 = ["red", "green", "blue"];

const [first, second, third] = user98;
console.log(first);
console.log(second);
console.log(third);

// 1. মাঝখানে comma দিয়ে দ্বিতীয় element skip করেছি।

const color = ["red", "green", "blue"];

const [first23, , third23] = color;
console.log(first23);
console.log(third23);
