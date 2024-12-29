let arr = [1, 2, 3, 4, 2, 1, 5]; // example array with duplicate elements
let uniqueArr = Array.from(new Set(arr)); // create a new Set from the array to remove duplicates, then convert it back to an array

console.log(uniqueArr); // [1, 2, 3, 4, 5]
