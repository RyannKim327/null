const numbers = [4, 2, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 3, 4]
