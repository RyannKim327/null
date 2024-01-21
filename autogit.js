const numbers = [5, 2, 8, 3, 1];

// Sorting in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]

// Sorting in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [8, 5, 3, 2, 1]
