const array = [4, 2, 9, 1, 5];
array.sort((a, b) => a - b);
console.log(array); // Output: [1, 2, 4, 5, 9]
const array = [4, 2, 9, 1, 5];
array.sort((a, b) => a - b).reverse();
console.log(array); // Output: [9, 5, 4, 2, 1]
const array = [4, 2, 9, 1, 5];
const sortedArray = array.slice().sort((a, b) => a - b);
console.log(sortedArray); // Output: [1, 2, 4, 5, 9]
