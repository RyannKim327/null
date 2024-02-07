// Define an array of numbers
const numbers = [2, 4, 6, 8, 10];

// Declare a variable sum and set it to 0
let sum = 0;

// Iterate over each element in the array
for (let i = 0; i < numbers.length; i++) {
  // Add each element to the sum variable
  sum += numbers[i];
}

// Calculate the mean by dividing the sum by the length of the array
const mean = (sum / numbers.length).toFixed(2);

// Print the mean to the console
console.log("Mean:", mean);
Mean: 6.00
