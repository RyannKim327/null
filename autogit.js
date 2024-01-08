const numbers = [1, 4, 2, 8, 5];
const max = Math.max(...numbers);

console.log(max); // Output: 8
const products = [
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 20 },
  { name: "T-shirt", price: 30 }
];

const maxPrice = products.reduce((max, product) => {
  return product.price > max ? product.price : max;
}, 0);

console.log(maxPrice); // Output: 50
