let arr = [5, 2, 7, 1, 9];

// Sorting the array in ascending order
arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);  // Output: [1, 2, 5, 7, 9]
let arr = [5, 2, 7, 1, 9];

// Sorting the array in ascending order
arr.sort((a, b) => a - b);

console.log(arr);  // Output: [1, 2, 5, 7, 9]
arr.sort((a, b) => b - a);

console.log(arr);  // Output: [9, 7, 5, 2, 1]
let arr = [5, 2, 7, 1, 9];
let sortedArr = [...arr].sort((a, b) => a - b);
