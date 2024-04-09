// Premitive : 07 types (call by value)
/**
 * String
 * Number
 * Boolean
 * null
 * undefined
 * Symbol
 * BigInt
 */

const score = 100;
const scoreValue = 100.34;

const isLoggedIn = true;
const temp = null;

let userEmail = undefined;
let userPass;

const id = Symbol("123");
console.log(id);
const anotherId = Symbol("123");
console.log(anotherId);
console.log(id === anotherId);
console.log(id == anotherId);

const bigNumber = 2346723647823n;

// Non Premitive : (call by reference)
/**
 * Array
 * Objects
 * Functions
 */

const hero = ["superman", "spiderman", "batman"];
console.log(hero);

let myObj = {
    name: "Jbj",
    age: 22,
}
console.log(myObj);

const myFunction = function () {
    console.log("Hello world");
}
console.log(typeof myFunction);