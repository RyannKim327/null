const numbers = [5, 3, 8, 2, 9, 1];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
[1, 2, 3, 5, 8, 9]
const numbers = [5, 3, 8, 2, 9, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);
[1, 2, 3, 5, 8, 9]
