// sort()

const names = ["Karim", "Jubayer", "Rahim"];

names.sort();

console.log(names); //Alphabetical order-এর মতো result

// JavaScript defaultভাবে values-কে string-এর মতো compare করে।

const numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers); //unexpected order

// Numeric sort ()

const numbers = [10, 2, 30, 5];

numbers.sort((a, b) => {
  return a - b; //ascending
});

numbers.sort((a, b) => {
  return b - a; //descending
});

// compare: negative → a আগে, positive → b আগে, zero → relative order unchanged

// immutable style চাইলে

const sortedNumbers = [...numbers].sort((a, b) => a - b);

// reduce()

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

// Industry

const users = [
  { name: "Jubayer", role: "admin" },
  { name: "Rahim", role: "user" },
  { name: "Karim", role: "user" },
];

const roleCounts = users.reduce((counts, user) => {
  counts[user.role] = (counts[user.role] || 0) + 1;

  return counts;
}, {});

// method combaine

const products = [
  {
    name: "Laptop",
    price: 85000,
    isActive: true,
  },
  {
    name: "Mouse",
    price: 1500,
    isActive: false,
  },
  {
    name: "Keyboard",
    price: 3500,
    isActive: true,
  },
];

const activeProductNames = products
  .filter((product) => product.isActive)
  .map((product) => product.name);

// Filter + Reduce

const total = products
  .filter((product) => {
    product.isActive;
  })
  .reduce((sum, product) => {
    return sum + product.price;
  }, 0);
