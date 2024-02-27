let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = Array.from(new Set(arr));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = arr.reduce((unique, item) => 
    unique.includes(item) ? unique : [...unique, item], []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
