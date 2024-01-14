const arr = [5, 2, 9, 1, 7];

// Sorting in ascending order
arr.sort((a, b) => a - b);

console.log(arr);  // Output: [1, 2, 5, 7, 9]
const arr = [5, 2, 9, 1, 7];
const sortedArr = [...arr].sort((a, b) => a - b);
