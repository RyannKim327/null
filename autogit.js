// Sample array
let arr = [1, 2, 3, 4, 5];

// Index of the element you want to remove
let index = 2;

// Number of elements to remove starting from the given index
let count = 1;

// Remove the element using splice()
arr.splice(index, count);

// The updated array without the removed element
console.log(arr); // Output: [1, 2, 4, 5]
