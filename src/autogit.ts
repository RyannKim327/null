// Define an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Reverse the array
numbers.reverse();

// Output the reversed array
console.log(numbers); // Output: [5, 4, 3, 2, 1]
// Define an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Create a copy of the array and reverse it
let reversedNumbers = [...numbers].reverse();

// Output the original and reversed arrays
console.log(numbers);         // Output: [1, 2, 3, 4, 5]
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
