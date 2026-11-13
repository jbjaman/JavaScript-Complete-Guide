const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((num) => num * 2);

console.log(result); // [ 2, 4, 6, 8, 10 ]

// 2.

function mapTest(numArray) {
  let initital = 30;

  const changedValue = numArray.map((value) => {
    return value * 2;
  });

  return function () {
    const final = changedValue.map((num) => {
      return num + initital;
    });

    console.log(final);
  };
}

const resultValue = mapTest([1, 2, 3, 4, 5]);

console.log(resultValue());
