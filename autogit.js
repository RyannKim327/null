const numbers = [5, 2, 9, 1, 10, 6];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 6, 9, 10]
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [10, 9, 6, 5, 2, 1]
