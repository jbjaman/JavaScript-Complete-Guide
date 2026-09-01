// Nested Destructuring

const user = {
  name: "Jubayer",

  profile: {
    designation: "Software Engineer",
    city: "Dhaka",
  },
};

const {
  profile: { designation, city },
} = user;

console.log(designation);
console.log(city);

// Nested Object Alias

const user98 = {
  name: "Jubayer",

  profile: {
    designation: "Software Engineer",
    city: "Dhaka",
  },
};

const {
  name: userName,
  profile: { designation: jobTitle, city: location },
} = user98;

console.log(`Name: ${userName}, Title: ${jobTitle}, City: ${location}`);

// Nested Array Destructuring

const numbers = [
  [10, 20],
  [30, 40],
];

const [[first, second], [third, fourth]] = numbers;

console.log(first, second, third, fourth);

// Object + Array + Object

const order = {
  id: 5001,

  customer: {
    name: "Jubayer",
    address: {
      city: "Dhaka",
    },
  },

  items: [
    {
      product: "Laptop",
      quantity: 1,
    },
    {
      product: "Mouse",
      quantity: 2,
    },
  ],
};

const {
  customer: {
    name: customerName,
    address: { city: customerCity },
  },
  items: [{ product: firstProduct, quantity: firstQuantity }],
} = order;

console.log(customerName);
console.log(customerCity);
console.log(firstProduct);
console.log(firstQuantity);

// Function Parameter

function createUser({ name, age }) {
  console.log(name);
  console.log(age);
}

createUser({ name: "Mashle", age: 23 });

// API Response + Destructuring

const response = {
  success: true,

  data: {
    user: {
      id: 101,
      name: "Jubayer",
      role: "admin",
    },
  },
};

const {
  data: {
    user: { name, role },
  },
} = response; // Real API data process করার সময় এই pattern খুবই useful

// Array Destructuring + Function Return

function getCoordinates() {
  return [23.8103, 90.4125];
}

const [latitude, longitude] = getCoordinates();

console.log(latitude);
console.log(longitude);

// Variable swap

let a = 10;
let b = 20;

[a, b] = [b, a]; // a= 20, b= 10

// default value

const user = {
  name: "Jubayer",
};

const { name, role = "user" } = user; // Destructuring default value শুধু undefined হলে কাজ করে।

console.log(name);
console.log(role);

// Destructuring + loop

const users = [
  {
    name: "Jubayer",
    role: "admin",
  },
  {
    name: "Rahim",
    role: "user",
  },
];

for (const { name, role } of users) {
  console.log(name);
  console.log(role);
}

// Industry level

const products = [
  {
    id: 101,
    name: "Laptop",
    pricing: {
      price: 85000,
      currency: "BDT",
    },
  },
  {
    id: 102,
    name: "Mouse",
    pricing: {
      price: 1500,
      currency: "BDT",
    },
  },
];

for (const {
  id,
  name,
  pricing: { price, currency },
} of products) {
  console.log(`${id} - ${name} - ${price}${currency}`);
}
