// Array of integers
let numbers = [5, 2, 9, 1, 5, 6];

// Sorting the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
// Sorting the array in descending order
numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
