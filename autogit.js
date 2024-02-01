let numbers = [4, 2, 7, 1, 5];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 4, 5, 7]

// Sort the array in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [7, 5, 4, 2, 1]
