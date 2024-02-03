let array = [5, 3, 8, 1, 2];

// Sort the array in ascending order
array.sort(function(a, b) {
  return a - b;
});

console.log(array); // Output: [1, 2, 3, 5, 8]
let array = [5, 3, 8, 1, 2];

// Sort the array in descending order
array.sort(function(a, b) {
  return b - a;
});

console.log(array); // Output: [8, 5, 3, 2, 1]
