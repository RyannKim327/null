// Example array of integers
const numbers: number[] = [10, 2, 5, 1, 8];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 8, 10]
// Sorting the array in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [10, 8, 5, 2, 1]
const numbers: number[] = [10, 2, 5, 1, 8];

// Sort in ascending order
numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers); // Output: [1, 2, 5, 8, 10]

// Sort in descending order
numbers.sort((a, b) => b - a);
console.log("Descending:", numbers); // Output: [10, 8, 5, 2, 1]
const numbers: number[] = [10, 2, 5, 1, 8];
const sortedAscending = [...numbers].sort((a, b) => a - b);
console.log("Original:", numbers); // Output: [10, 2, 5, 1, 8]
console.log("Sorted Ascending:", sortedAscending); // Output: [1, 2, 5, 8, 10]
