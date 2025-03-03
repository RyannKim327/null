let myArray: number[] = [1, 2, 3, 4, 5];

console.log("Original array:", myArray); // Original array: [1, 2, 3, 4, 5]

// Reverse the array
myArray.reverse();

console.log("Reversed array:", myArray); // Reversed array: [5, 4, 3, 2, 1]
let myArray: number[] = [1, 2, 3, 4, 5];

console.log("Original array:", myArray); // Original array: [1, 2, 3, 4, 5]

// Create a new reversed array without modifying the original
let reversedArray = [...myArray].reverse();

console.log("Reversed array:", reversedArray); // Reversed array: [5, 4, 3, 2, 1]
console.log("Original array unchanged:", myArray); // Original array unchanged: [1, 2, 3, 4, 5]
