// Define an array of integers
const numbers = [5, 2, 8, 1, 4];

// Sort the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]
