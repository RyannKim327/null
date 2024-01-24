const numbers = [4, 2, 8, 5, 1, 3];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5, 8]
const numbers = [4, 2, 8, 5, 1, 3];

// Sorting a copy of the array in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 8]
console.log(numbers); // Output: [4, 2, 8, 5, 1, 3]
