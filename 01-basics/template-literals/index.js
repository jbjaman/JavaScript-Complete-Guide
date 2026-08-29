// 1. template literal ` `

const userName = `Mashle Hanma`;
const userage = `20`;

// 2. readable

const user = `My Name is ${userName} and I am ${userage} years old`;
console.log(user);

// 3. Industry level literal + new line

const productName = "Laptop";
const quantity = 2;
const price = 75000;

const productDetails = `Product: ${productName}
Quantity: ${quantity}
Total: ${price * quantity} BDT`;

console.log(productDetails);
