const numbers: number[] = [10, 5, 2, 9, 1];

// Sort ascending
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 9, 10]

// Sort descending
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [10, 9, 5, 2, 1]
