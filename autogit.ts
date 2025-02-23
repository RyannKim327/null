let array: number[] = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
let originalArray: number[] = [1, 2, 3, 4, 5];
let reversedArray: number[] = originalArray.slice().reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
