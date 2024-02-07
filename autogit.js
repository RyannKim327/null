const numbers = [5, 2, 9, 1, 7];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 5, 7, 9]

// Sort the array in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 7, 5, 2, 1]
const numbers = [5, 2, 9, 1, 7];

// Create a copy of the original array
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(numbers); // Output: [5, 2, 9, 1, 7]
console.log(sortedNumbers); // Output: [1, 2, 5, 7, 9]
