const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [...originalArray].reverse();

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
