let numbers = [5, 2, 9, 1, 8, 3];

// Sorting the array in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 3, 5, 8, 9]
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers); // Output: [9, 8, 5, 3, 2, 1]
