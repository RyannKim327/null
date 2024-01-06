// Define an array of numbers
const numbers = [5, 6, 10, 15, 2, 9];

// Initialize a variable for the sum
let sum = 0;

// Iterate through each number in the array
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Calculate the mean
const mean = sum / numbers.length;

// Round the mean to two decimal places
const roundedMean = mean.toFixed(2);

// Display the mean
console.log("Mean:", roundedMean);
Mean: 8.50
