// 1. for

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. Array with for

const users = ["Mashle", "Hanma", "Rahim"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// 3. Industry

const users98 = [
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
  {
    id: 3,
    name: "Karim",
    role: "user",
  },
];

for (let i = 0; i < users98.length; i++) {
  console.log(`User #${i + 1}: ${users98[i].name}`);
}
