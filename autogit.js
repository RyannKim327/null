// Define an array of integers
const numbers = [5, 3, 8, 1, 2];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

// Print the sorted array
console.log(numbers); // Output: [1, 2, 3, 5, 8]
// Sort the array in descending order
numbers.sort((a, b) => b - a);

// Print the sorted array in descending order
console.log(numbers); // Output: [8, 5, 3, 2, 1]
