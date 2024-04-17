const numbers = [5, 2, 8, 3, 1, 4];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 8]
const numbers = [5, 2, 8, 3, 1, 4];
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [8, 5, 4, 3, 2, 1]
