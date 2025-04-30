const numbers: number[] = [5, 3, 8, 1, 2];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 5, 8]
const numbersDescending: number[] = [5, 3, 8, 1, 2];

// Sort the array in descending order
numbersDescending.sort((a, b) => b - a);

console.log(numbersDescending); // Output: [8, 5, 3, 2, 1]
