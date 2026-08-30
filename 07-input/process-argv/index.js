// 1. একটা array-এর মতো arguments পাওয়া যাবে।

console.log(process.argv);

// 2. input

const name = process.argv[2];
console.log(`Hello ${name}`);
