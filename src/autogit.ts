const numbers: number[] = [10, 2, 30, 25, 5];

// Sort in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [2, 5, 10, 25, 30]
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [30, 25, 10, 5, 2]
