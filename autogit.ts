// Create an array
let myArray: number[] = [1, 2, 3, 4, 5];

// Reverse the order of the array
myArray.reverse();

console.log(myArray); // Output: [5, 4, 3, 2, 1]
// Create an array
let myArray: number[] = [1, 2, 3, 4, 5];

// Create a reversed copy of the array
let reversedArray: number[] = myArray.slice().reverse();

console.log(myArray);       // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
