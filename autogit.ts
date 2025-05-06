// Define an array of integers
const numbers: number[] = [34, 12, 5, 67, 23, 89, 1];

// Use the sort method with a comparison function
const sortedNumbers: number[] = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 5, 12, 23, 34, 67, 89]
const numbers: number[] = [34, 12, 5, 67, 23, 89, 1];
const sortedNumbers: number[] = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 5, 12, 23, 34, 67, 89]
console.log(numbers);       // Original array remains unchanged
