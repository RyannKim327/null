let myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray); // Output: [5, 4, 3, 2, 1]
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [...originalArray].reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(originalArray); // [1, 2, 3, 4, 5]
