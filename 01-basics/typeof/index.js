// 1. typeof

const input = process.argv[2];
console.log(typeof input); // Node.js command-line এ number argument সাধারণত string হিসেবে আসে।

// 2. JavaScript-এর historical quirk

console.log(typeof null); // output: object

// 3. typeof[], typeof{}

console.log(typeof []); // output: object -> কারণ array JavaScript-এর object category-এর মধ্যে পড়ে।

console.log(typeof {});
