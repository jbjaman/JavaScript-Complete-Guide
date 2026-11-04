// 1.

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

/** Output:
 * A
 * D
 * C
 * B
 */

/**
 * কেন?
1. A synchronous, তাই আগে execute।
2. setTimeout callback Task Queue-এর জন্য অপেক্ষা করে।
3. Promise callback Microtask Queue-তে যায়।
4. D synchronous, তাই এরপর execute।
5. Call Stack খালি হলে Microtask Queue-এর callback আগে execute হয়।
6. এরপর Task Queue-এর callback execute হয়।
 * 
 * 
 * 
 * Promise callback সাধারণত setTimeout callback-এর আগে execute হয়, কারণ Microtask Queue-এর priority বেশি।
 * 
 * 
 * 
 * 
 */
