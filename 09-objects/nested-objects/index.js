// 1. Nested Object

const user = {
  name: "Mashle Hanma",
  role: "user",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

user.role = "admin"; // modify

console.log(user.role); // output: admin

// const object-এর binding protect করে, object-এর internal properties automatically immutable করে না।

// 2. add new property

const product = {
  id: 102,
  name: "Laptop",
};

product.stock = 20;

// 3. object + function

const user34 = {
  name: "Rahim",
  sayHello: function () {
    console.log("Hello");
  },
};

user34.sayHello();
