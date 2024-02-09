// Define an array of integers
const numbers = [5, 2, 9, 1, 7];

// Use the sort() method to sort the array
numbers.sort();

// Print the sorted array
console.log(numbers); // Output: [1, 2, 5, 7, 9]
// Define an array of integers
const numbers = [5, 2, 9, 1, 7];

// Use the sort() method with a comparison function
numbers.sort((a, b) => a - b);

// Print the sorted array
console.log(numbers); // Output: [1, 2, 5, 7, 9]
// Define an array of integers
const numbers = [5, 2, 9, 1, 7];

// Use the sort() method with a comparison function for descending order
numbers.sort((a, b) => b - a);

// Print the sorted array
console.log(numbers); // Output: [9, 7, 5, 2, 1]
