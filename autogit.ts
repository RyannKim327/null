// Sample array of integers
const numbers: number[] = [5, 3, 8, 1, 2, 7];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log("Sorted array (ascending):", numbers);

// To sort in descending order, you can reverse the comparison
numbers.sort((a, b) => b - a);

console.log("Sorted array (descending):", numbers);
