const numbers: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Sort in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
const sortedNumbers = [...numbers].sort((a, b) => a - b);
