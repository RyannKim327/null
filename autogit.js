let array = [1, 2, 3, 4, 2, 1];
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4]
let array = [1, 2, 3, 4, 2, 1];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4]
