// Define an array of integers
const numbers = [5, 2, 8, 1, 4];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 4, 5, 8]
// Sort the array in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [8, 5, 4, 2, 1]
