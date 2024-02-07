// Defining an array of integers
var numbers = [5, 2, 9, 1, 6];

// Sorting the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 5, 6, 9]
