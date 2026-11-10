// 1. Arrow Function

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// 2.

const greet = (name) => {
  return "Hello " + name;
};

// 3.

const greet = (name) => "Hello " + name;

// 4.

const greet = () => {
  console.log("Hello");
};

// 5.

const createUser = () => ({
  name: "Rahim",
  age: 22,
});
