const array = [5, 1, 3, 2, 4];

// Sort the array in ascending order
const sortedArray = array.sort((a, b) => a - b);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
// Sort the array in descending order
const sortedArray = array.sort((a, b) => b - a);

console.log(sortedArray); // Output: [5, 4, 3, 2, 1]
