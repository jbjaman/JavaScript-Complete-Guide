// Object

const user98 = {
  name: "Rahim",
  role: "user",
  age: 34,
};

const { name, role, age } = user98;

console.log(name);
console.log(role);
console.log(age);

// 1.

const user76 = {
  id: 23,
  name34: "Rahim",
  role: "user",
  age: 34,
};

const { id, name34 } = user76;

console.log(id);
console.log(name34);

// 2. Name Alias

const user23 = {
  id: 10012,
  name: "Mashle Hanma",
  role: "admin",
  age: 34,
};

const { id: userId, name: userName } = user23;

console.log(userId);
console.log(userName);
