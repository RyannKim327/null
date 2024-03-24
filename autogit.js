let numbers = [4, 2, 8, 5, 1];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);
