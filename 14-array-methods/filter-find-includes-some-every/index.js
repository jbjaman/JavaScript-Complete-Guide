// filter()

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// searching with filter

const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Mouse", category: "electronics" },
  { name: "Chair", category: "furniture" },
];

const electronics = products.filter((product) => {
  return product.category === "electronics";
});

// find()

const users = [
  { id: 1, name: "Jubayer" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
];

const user = users.find((user) => {
  return user.id === 2; // না পেলে undefined
});

// includes()

const roles = ["admin", "editor", "user"];

console.log(roles.includes("admin"));

// some()

const users = [
  { name: "Jubayer", isActive: false },
  { name: "Rahim", isActive: true },
  { name: "Karim", isActive: false },
];

const hasActiveUser = users.some((user) => {
  return user.isActive;
});

// every ()

const numbers = [2, 4, 6, 8];

const allEven = numbers.every((number) => {
  return number % 2 === 0;
});
