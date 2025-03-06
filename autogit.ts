const numbers: number[] = [5, 2, 9, 1, 7];

// Sort in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 5, 7, 9]

// Sort in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 7, 5, 2, 1]
