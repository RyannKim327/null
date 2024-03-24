// Define an array of integers
let numbers = [5, 3, 8, 1, 2, 4];

// Sort the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

// Print the sorted array
console.log(numbers);
// Sort the array in descending order
numbers.sort(function(a, b) {
  return b - a;
});
