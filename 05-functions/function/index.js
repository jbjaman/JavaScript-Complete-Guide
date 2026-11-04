// 1. reusability

function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(500, 3);
const total2 = calculateTotal(123, 5);
const total3 = calculateTotal(768, 7);
const total4 = calculateTotal(456, 8);

// 2.

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Rahim")); // Hello Rahim
