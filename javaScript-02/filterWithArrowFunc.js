// creates a new array with elements that pass a test specified by a function

const numberOfArr = [1,2,3,4,5];

const evenNumber = numberOfArr.filter(num => num % 2 == 0);

console.log(evenNumber); //O: [ 2,4]

console.log(numberOfArr); //O: [1,2,3,4,5]