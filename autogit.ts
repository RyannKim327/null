const originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

// Reverse the array
const reversedArray: number[] = originalArray.reverse();
console.log("Reversed Array:", reversedArray);
const originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

// Create a copy and reverse it
const reversedArray: number[] = [...originalArray].reverse();
// or using slice
// const reversedArray: number[] = originalArray.slice().reverse();

console.log("Reversed Array:", reversedArray);
console.log("Original Array after reversing:", originalArray);
