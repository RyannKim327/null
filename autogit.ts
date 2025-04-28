const originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

originalArray.reverse();

console.log("Reversed Array:", originalArray);
Original Array: [1, 2, 3, 4, 5]
Reversed Array: [5, 4, 3, 2, 1]
const originalArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

const reversedArray = originalArray.slice().reverse();

console.log("Reversed Array:", reversedArray);
console.log("Original Array after reverse:", originalArray); // Original array remains unchanged
Original Array: [1, 2, 3, 4, 5]
Reversed Array: [5, 4, 3, 2, 1]
Original Array after reverse: [1, 2, 3, 4, 5]
