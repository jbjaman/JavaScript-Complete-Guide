function discount(price, discount) {
  let total = 0;

  return function () {
    total = price - price * discount;

    return total;
  };
}

const itemPrice = discount(100, 0.2);

console.log(itemPrice); // [Function (anonymous)]
console.log(itemPrice()); // 80
