// 1. while

let count = 0;

while (count < 5) {
  console.log(count);

  count++;
}

// 2. Industry

const queue = ["User-101", "User-102", "User-103"];

while (queue.length > 0) {
  const user = queue.shift();

  console.log(`Processing ${user}`);
}

// 3. while + break

const users = [
  { id: 101, name: "Jubayer" },
  { id: 102, name: "Rahim" },
  { id: 103, name: "Karim" },
];

const targetId = 102;

for (const user of users) {
  if (user.id === targetId) {
    console.log(`User found: ${user}`); // output: User found: [object Object]
    console.log("User found:", user); // output: User found: { id: 102, name: 'Rahim' }
    break;
  }
}

// while + continue

const users45 = ["Jubayer", "Rahim", "Karim", "Hasan"];

for (user of users45) {
  if (user === "karim") {
    continue;
  }
  console.log(user);
}
