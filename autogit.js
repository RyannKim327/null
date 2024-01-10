// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum using the reduce() method
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the mean by dividing the sum by the array length
const mean = sum / numbers.length;

// Round the mean to 2 decimal places
const roundedMean = mean.toFixed(2);

console.log(`Mean: ${roundedMean}`);
