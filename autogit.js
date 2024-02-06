let array = [5, 2, 9, 1, 7];

// Using the sort() method
array.sort(function(a, b) {
  return a - b;
});

console.log(array); // Output: [1, 2, 5, 7, 9]
let array = [5, 2, 9, 1, 7];
array.sort((a, b) => a - b);
console.log(array); // Output: [1, 2, 5, 7, 9]
