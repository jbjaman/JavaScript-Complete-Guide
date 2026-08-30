// 1. slice ()

const users = ["Ao", "Bo", "Co", "Do"];

const result = users.slice(1, 3); // shrtcut-> 3-1 = 2; index : 1

console.log(result);

// 2. splice ()

const users98 = ["A", "B", "C", "D"];

const result98 = users98.splice(1, 2);

console.log(result98);

// 3.

const users97 = ["A", "B", "C", "D"];
const result97 = users97.splice(1, 1, "X");
console.log(users97); // original array is muted
console.log(result97); // returns deleted items
