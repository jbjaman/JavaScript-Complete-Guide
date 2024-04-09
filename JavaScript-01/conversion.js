let score = 33;

let anotherScore = "33";

let lastScore = "33abc";

let nullScore = null;

let undefinedScore = undefined;

let bool = false; // true=1, false = 0

let stringName = "Jubayer";


console.log(score);
console.log(typeof (score));

console.log(anotherScore);
console.log(typeof anotherScore);

console.log(lastScore);
console.log(typeof lastScore);

let anotherScoreNumber = Number(anotherScore);
let valueNumber = Number(lastScore);
console.log(valueNumber);
console.log(anotherScoreNumber);

let valueNull = Number(nullScore);
console.log(nullScore);
console.log(valueNull);

let valueUndefinedScore = Number(undefinedScore);
console.log(undefinedScore);
console.log(valueUndefinedScore);

let valueBoll = Number(bool);
console.log(bool);
console.log(valueBoll);

let valueString = Number(stringName);
console.log(stringName);
console.log(valueString);

/**
 * "33" => 33
 * "33abc" => NaN
 * 
 */

let isLoggedIn = 0;
let bollIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(bollIsLoggedIn);

let isLog = "";
let boolisLog = Boolean(isLog);
console.log(boolisLog);

let isBLog = "Jbj";
let boolisBLog = Boolean(isBLog);
console.log(boolisBLog);

/**
 * "" => false
 * "Jbj" => true
 */

let numbertoString = 33;
let convertnumbertoString = String(numbertoString);
console.log(convertnumbertoString);
console.log(typeof convertnumbertoString);