// Define an array of numbers
const numbers = [5, 10, 15, 20];

// Calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the mean by dividing the sum by the length of the array
const mean = sum / numbers.length;

console.log(mean); // Output: 12.5
