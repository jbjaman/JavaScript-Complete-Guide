const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter((num) => {
  return num > 20;
});

console.log(result);

// 2.

const products = [
  { id: 1, name: "Wireless Mouse", price: 800, inStock: true },
  { id: 2, name: "USB Cable", price: 250, inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 3000, inStock: false },
  { id: 4, name: "Laptop Stand", price: 1200, inStock: true },
  { id: 5, name: "Phone Case", price: 400, inStock: false },
];

function stockProducts() {
  const availableProducts = products.filter((product) => {
    return product.inStock === true && product.price > 500;
  });

  return (function () {
    let discount = 0.1;

    const discountProduct = availableProducts.map((prod) => {
      const price = prod.price - prod.price * discount;

      return {
        name: prod.name,
        discountedPrice: price,
      };
    });

    return discountProduct;
  })(); // <-- এই () দেওয়ার কারণে ভেতরের ফাংশনটি সাথে সাথেই রান হয়ে রেজাল্ট রিটার্ন করবে.. যাকে IIFE বা ইনার ফাংশন কল বলা হয়
}

console.log(stockProducts());
