// Example array
let myArray: number[] = [1, 2, 3, 4, 5];

// Reversing the array
myArray.reverse();

console.log(myArray); // Output: [5, 4, 3, 2, 1]
// Example array
let myArray: number[] = [1, 2, 3, 4, 5];

// Creating a new array and reversing it
let reversedArray = [...myArray].reverse(); // Using spread operator
// or
// let reversedArray = myArray.slice().reverse(); // Using slice

console.log(myArray);        // Output: [1, 2, 3, 4, 5]
console.log(reversedArray);  // Output: [5, 4, 3, 2, 1]
