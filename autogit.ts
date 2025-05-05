const numbers: number[] = [5, 3, 9, 1, 10];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 3, 5, 9, 10]
const numbers: number[] = [5, 3, 9, 1, 10];

numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [10, 9, 5, 3, 1]
const numbers: number[] = [5, 3, 9, 1, 10];
const sorted = [...numbers].sort((a, b) => a - b);

console.log(sorted); // [1, 3, 5, 9, 10]
console.log(numbers); // [5, 3, 9, 1, 10]
