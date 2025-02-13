const array: number[] = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = [...originalArray].reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
