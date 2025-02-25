const numbers: number[] = [4, 2, 3, 1, 5];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]
