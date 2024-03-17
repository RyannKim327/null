// Define an array with duplicate elements
let array = [1, 2, 2, 3, 4, 4, 5];

// Create a new Set from the array to remove duplicates
let uniqueArray = [...new Set(array)];

console.log(uniqueArray);
