// creating an array of integers
const numbers = [9, 2, 5, 1, 7];

// sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 7, 9]
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 7, 5, 2, 1]
