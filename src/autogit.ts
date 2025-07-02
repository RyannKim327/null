const array: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", array);

// Reverse the array
array.reverse();
console.log("Reversed Array:", array);
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = originalArray.slice().reverse(); // Creates a new array
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
