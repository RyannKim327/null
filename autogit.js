const array = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = Object.keys(array.reduce((acc, value) => ((acc[value] = true), acc), {})).map(Number);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
