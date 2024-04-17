let arr = [1, 2, 3, 4, 1, 2, 5];

let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 1, 2, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 1, 2, 5];

let uniqueArr = arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
