const numbers: number[] = [5, 3, 8, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 5, 8]
numbers.sort((a, b) => b - a);
