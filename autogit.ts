// Example array
const array: number[] = [1, 2, 3, 4, 5];

// Reverse the array
array.reverse();

// Output the reversed array
console.log(array); // Output: [5, 4, 3, 2, 1]
const originalArray: number[] = [1, 2, 3, 4, 5];

// Create a copy of the array and reverse it
const reversedArray = [...originalArray].reverse();

// Output both arrays
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
const originalArray: number[] = [1, 2, 3, 4, 5];

// Create a copy using slice and reverse it
const reversedArray = originalArray.slice().reverse();

// Output both arrays
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
