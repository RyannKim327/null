const numbers = [5, 2, 9, 1, 7];

// Sort the array in ascending order
const sortedArray = numbers.sort((a, b) => a - b);

console.log(sortedArray);
[1, 2, 5, 7, 9]
const numbers = [5, 2, 9, 1, 7];

// Create a copy of the array
const sortedArray = numbers.slice().sort((a, b) => a - b);

console.log(sortedArray);
console.log(numbers); // original array remains unchanged
[1, 2, 5, 7, 9]
[5, 2, 9, 1, 7]
