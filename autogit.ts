let array: number[] = [1, 2, 3, 4, 5];

// Reverse the array
array.reverse();

console.log(array); // Output: [5, 4, 3, 2, 1]
let originalArray: number[] = [1, 2, 3, 4, 5];

// Create a reversed copy of the array
let reversedArray: number[] = originalArray.slice().reverse();

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
