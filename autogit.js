const numbers = [8, 3, 1, 5, 2, 9, 4, 7, 6];

numbers.sort((a, b) => a - b);

console.log(numbers);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a, b) => b - a);

console.log(numbers);  // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
