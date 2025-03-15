const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = originalArray.reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [5, 4, 3, 2, 1] (original array is also modified)
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = originalArray.slice().reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
