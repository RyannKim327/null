// Create an array
let myArray: number[] = [1, 2, 3, 4, 5];

// Log the original array
console.log("Original array:", myArray);

// Reverse the array
myArray.reverse();

// Log the reversed array
console.log("Reversed array:", myArray);
// Create an array
let originalArray: number[] = [1, 2, 3, 4, 5];

// Log the original array
console.log("Original array:", originalArray);

// Create a new reversed array without modifying the original
let reversedArray: number[] = [...originalArray].reverse();

// Log both arrays
console.log("Reversed array:", reversedArray);
console.log("After reversing, original array:", originalArray);
