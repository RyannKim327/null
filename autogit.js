const numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
const numbers = [3, 1, 5, 2, 4];
const sortedNumbers = [].concat(numbers).sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
const numbers = [3, 1, 5, 2, 4];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a);
