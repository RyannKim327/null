// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of the numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Calculate the mean
const mean = sum / numbers.length;

// Print the result
console.log('Mean:', mean);
