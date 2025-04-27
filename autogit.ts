const myArray = [1, 2, 3, 4, 5];
const reversedArray = myArray.reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
const originalArray = [1, 2, 3, 4, 5];
const reversedCopy = [...originalArray].reverse();

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(reversedCopy);  // [5, 4, 3, 2, 1]
