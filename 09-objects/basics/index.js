// 1. Object

const user = {
  name: "Mashle Hanma",
  email: "user@example.com", // key: email, value: "user@example.com"
  age: 25,
  role: "admin",
  isActive: true,
};

// 2. Dot Notation

console.log(`User: ${user.name}`); //static property
console.log(`Email: ${user.email}`);

// 3. Bracket Notation for Dynamic Property (Industry)

const field = "role";

const user98 = {
  name: "Mashle Hanma",
  age: 25,
  role: "admin",
};

console.log(user[field]);
