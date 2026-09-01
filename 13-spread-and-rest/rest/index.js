//  REST

const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

// Rest + Array Destructuring

const users = ["Jubayer", "Rahim", "Karim", "Hasan"];

const [firstUser, ...otherUsers] = users;

// Rest parameter in function

function calculateTotal(...prices) {
  console.log(prices);
}

calculateTotal(100, 200, 300, 400);

// Rest + Reduce

function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
const total = calculateTotal(100, 200, 300, 400);

console.log(total);

// 1.

function logPermissions(user, ...permissions) {
  console.log(user);
  console.log(permissions);
}

logPermissions("Jubayer", "read:user", "update:user", "delete:user");

// Rest with Object

const user = {
  id: 101,
  name: "Jubayer",
  email: "jubayer@example.com",
  role: "admin",
};

const { id, ...userInfo } = user;

// REST + Alias

const user = {
  name: "Jubayer",
  email: "jubayer@example.com",
  role: "admin",
};

const { name: userName, ...accountInfo } = user;
