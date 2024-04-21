// executes a reducer function on each element of the array resulting in a single output value

const numbersOfArray = [1,2,3,4,5];

const sum = numbersOfArray.reduce((acculumated, num)=> acculumated + num, 10);

console.log(sum);

console.log(numbersOfArray);