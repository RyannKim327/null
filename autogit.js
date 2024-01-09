const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const reversedArray = [...array].reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
