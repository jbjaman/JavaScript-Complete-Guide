
const name = "Jubayer";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jbj-Zeehad');

console.log(gameName[0]); //Output: Z
console.log(gameName[1]); //Output: e
console.log(gameName.__proto__); //Output: {}

console.log(gameName.length); //Output: 6

console.log(gameName.toUpperCase()); // Output: ZEEHAD

console.log(gameName.charAt(2)); //Output: e

console.log(gameName.indexOf('h')); //Output: 3

const newString = gameName.substring(0,3); //Output: Jbj

console.log(newString); 

const anotherString = gameName.slice(-9, 3);

console.log(anotherString);