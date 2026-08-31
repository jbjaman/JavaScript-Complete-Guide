// 1. for....of

const users65 = ["Jubayer", "Rahim", "Karim"];

for (const user of users65) {
  console.log(user);
}

// 2. Array of Objects + for...of

const users = [
  {
    id: 1,
    name: "Jubayer",
    role: "admin",
  },
  {
    id: 2,
    name: "Rahim",
    role: "user",
  },
];

for (const user of users) {
  console.log(`Name: ${user.name}, Role: ${user.role}`);
}

// 3. for....in

const user98 = {
  name: "Jubayer",
  age: 25,
  role: "admin",
};

for (const propertyKey in user98) {
  console.log(propertyKey);
}

// 4. object's value using for....in

for (const keyValue in user98) {
  console.log(keyValue, user98[keyValue]);
}
