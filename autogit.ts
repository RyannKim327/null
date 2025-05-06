// Define an array of integers
let numbers: number[] = [5, 3, 8, 1, 2, 7];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log("Sorted array (ascending):", numbers);

// If you want to sort in descending order, you can reverse the comparison
numbers.sort((a, b) => b - a);

console.log("Sorted array (descending):", numbers);
