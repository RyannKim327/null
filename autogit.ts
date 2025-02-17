const numbers: number[] = [5, 3, 8, 1, 4];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 3, 4, 5, 8]
// Sorting the array in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [8, 5, 4, 3, 1]
