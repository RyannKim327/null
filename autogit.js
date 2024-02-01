let numbers = [4, 2, 8, 5, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 4, 5, 8]
let numbers = [4, 2, 8, 5, 1];
let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(numbers); // Output: [4, 2, 8, 5, 1]
console.log(sortedNumbers); // Output: [1, 2, 4, 5, 8]
