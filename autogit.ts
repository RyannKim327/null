const numbers = [10, 5, 100, 1];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 5]
const numbers = [10, 5, 100, 1];
numbers.sort((a, b) => a - b);  // Ascending order
console.log(numbers); // Output: [1, 5, 10, 100]
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [100, 10, 5, 1]
