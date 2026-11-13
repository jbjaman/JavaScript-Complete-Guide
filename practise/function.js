// Function declaration

function sum(a, b) {
  return a + b;
}

console.log(sum(12, 23));

// Function expression

const multiply = function (c, d) {
  return c * d;
};

console.log(multiply(34, 4));

const customerInfo = function (id, name) {
  const userId = id;
  const userName = name;

  return console.log(`My Name is ${userName} and ID No is ${userId}`);
};

customerInfo(34, "Rahim");

// Arrow function

const division = (e, f) => {
  return e / f;
};

console.log(division(56, 7));

const gamer = (pubg, cod) => {
  let player = 0;

  const pubgPlayer = pubg;
  const codPlayer = cod;

  player = pubgPlayer + codPlayer;
  return console.log(player > 12 ? `Total Player is: ${player}` : 0);
};

gamer(1, 2);
gamer(12, 2);
