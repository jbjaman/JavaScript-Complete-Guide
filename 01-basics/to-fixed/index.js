// 1. decimal

const price = 34.6746564567;

console.log(price.toFixed(0));
console.log(price.toFixed(1));
console.log(price.toFixed(2));
console.log(price.toFixed(3));

// 2. always return sttring

const price98 = 34.6746564567;
const result = price.toFixed(4);
console.log(typeof result);

// 3. Industry

const averagePrice = 123.5445;
const displayPrice = averagePrice.toFixed(2);
console.log(`Average Price: ${displayPrice} BDT`);
