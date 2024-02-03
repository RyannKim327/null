const numbers = [9, 5, 1, 3, 7, 2];

// Using the sort() method
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 5, 7, 9]
const numbers = [9, 5, 1, 3, 7, 2];

// Using the spread operator
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 7, 9]
