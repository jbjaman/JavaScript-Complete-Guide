// Array

const numbers89 = [10, 20, 30];

console.log(...numbers89); // output: 10, 20, 30

// Array Copy

const numbers = [10, 20, 30];

const copiedNumbers = [...numbers];

console.log(copiedNumbers); // output: [10, 20, 30]

// spread + Combine Arrays

const frontend = ["React", "Next.js"];
const backend = ["Node.js", "Express"];

const technologies = [...frontend, ...backend];

console.log(technologies);

// Add item without mutating original

const users = ["Rahim", "Karim"];

users.push("Mashle"); //original array পরিবর্তিত হয়।

const updatedUsers = [...users, "Joy"]; // কিন্তু নতুন array চাইলে:

console.log(users);
console.log(updatedUsers);

// Remove/Modify

const users = ["Jubayer", "Rahim", "Karim"];

const remainngUsers = users.filter((user) => user !== "Rahim");

// spread + function argumants

function calculateTotal(a, b, c) {
  return a + b + c;
}
const prices = [100, 200, 300];

calculateTotal(...prices);

// 1.

const scores = [85, 92, 78, 96];
const highestScore = Math.max(...scores);
console.log(highestScore);

// Spread with string

const name = "Jubayer";
const characters = [...name];
console.log(characters); // Output: ["J", "u", "b", "a", "y", "e", "r"]

// Object Spread

const user = {
  name: "Jubayer",
  age: 25,
};

const copiedUser = {
  ...user,
};

// Object Combine

const basicInfo = {
  name: "Jubayer",
  age: 25,
};

const jobInfo = {
  role: "Software Engineer",
  company: "Tech Solutions",
};

const user = { ...basicInfo, ...jobInfo };

// Object Update

const user = {
  id: 101,
  name: "Jubayer",
  role: "user",
};

const updatedUser = { ...user, role: "admin" };
