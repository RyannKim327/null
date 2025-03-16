// Example array
let arr: number[] = [1, 2, 3, 4, 5];

// Reverse the array
arr.reverse();

console.log(arr); // Output: [5, 4, 3, 2, 1]
// Example array
let originalArr: number[] = [1, 2, 3, 4, 5];

// Create a new reversed array
let reversedArr: number[] = originalArr.slice().reverse();

console.log(originalArr); // Output: [1, 2, 3, 4, 5]
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
