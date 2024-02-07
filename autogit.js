const numbers = [4, 2, 8, 6, 5];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [2, 4, 5, 6, 8]
const numbers = [4, 2, 8, 6, 5];
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [2, 4, 5, 6, 8]
console.log(numbers); // Output: [4, 2, 8, 6, 5]
