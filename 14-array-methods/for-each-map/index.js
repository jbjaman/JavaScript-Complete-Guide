// forEach()

const users = ["Mashle", "Hanma", "Rahim"];

users.forEach((user) => {
  console.log(user);
});

// map()

const numbers = [1, 2, 3, 4];

const double = numbers.map((number) => {
  return number * 2;
});

// map() + Object

const users = [
  {
    id: 1,
    name: "Jubayer",
  },
  {
    id: 2,
    name: "Rahim",
  },
];

const names = users.map((user) => {
  return user.name;
});

// new object using map

const users = [
  {
    id: 1,
    name: "Jubayer",
  },
  {
    id: 2,
    name: "Rahim",
  },
];

const userCards = users.map((user) => {
  return {
    id: user.id,
    displayName: user.name,
  };
});
