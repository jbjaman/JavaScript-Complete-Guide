// applies a function to each element of an array and returns a new array with the results

const numberOfArray = [1,2,3,4,5];

const squaredTheNumberOfArray = numberOfArray.map(num => num * num);

console.log(squaredTheNumberOfArray); //O: [1,4,9,16,25]

console.log(numberOfArray); //O: [1,2,3,4,5]