let array = [1, 2, 3, 3, 4, 5, 5, 6];

let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
