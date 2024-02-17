// Define an array
const numbers = [3, 6, 2, 8, 4, 10];

// Use the apply() method to find the maximum value in the array
const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber); // Output: 10
