let array = [1, 2, 3, 4, 1, 2, 5];

// Create a Set from the array to remove duplicates
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
