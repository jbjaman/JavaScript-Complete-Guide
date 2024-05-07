
const name = "Jubayer";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jbj-Zeehad-dev');

console.log(gameName[0]); //Output: Z
console.log(gameName[1]); //Output: e
console.log(gameName.__proto__); //Output: {}

console.log(gameName.length); //Output: 6

console.log(gameName.toUpperCase()); // Output: ZEEHAD

console.log(gameName.charAt(2)); //Output: e

console.log(gameName.indexOf('h')); //Output: 3

const newString = gameName.substring(0,3); //Output: Jbj

console.log(newString); 

const anotherString = gameName.slice(-10, 3);

console.log(anotherString);

const newStringOne = "   Jubayer ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jbjaman%20gmail.com";

console.log(url.replace('%20','@'));    

console.log(url.includes('jbj')); //Output: true

console.log(url.includes('jbjo')); //Output: false

console.log(gameName.split('-')); //Output: ['Jbj','Zeehad','dev']
console.log(url.split('%'));