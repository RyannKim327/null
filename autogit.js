let numbers = [10, 5, 8, 15, 3];
let max = Math.max(...numbers);

console.log("The maximum value in the array is: " + max); // Output: The maximum value in the array is: 15
let numbers = [10, 5, 8, 15, 3];
let max = numbers.reduce((a, b) => Math.max(a, b));

console.log("The maximum value in the array is: " + max); // Output: The maximum value in the array is: 15
