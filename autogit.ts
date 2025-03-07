let array: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", array);

// Reverse the array
array.reverse();
console.log("Reversed array:", array);
let originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray);

// Create a new reversed array
let reversedArray: number[] = originalArray.slice().reverse();
console.log("Reversed array:", reversedArray);
console.log("Original array after reversing:", originalArray); // remains unchanged
