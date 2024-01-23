const numbers = [6, 2, 10, 5, 8];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 5, 6, 8, 10]
const numbers = [6, 2, 10, 5, 8];
const sortedArray = [...numbers].sort((a, b) => a - b);
console.log(sortedArray); // Output: [2, 5, 6, 8, 10]
const numbers = [6, 2, 10, 5, 8];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // Output: [2, 5, 6, 8, 10]
