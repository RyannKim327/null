const array = [1, 2, 3, 4, 1, 2, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 4, 1, 2, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 4, 1, 2, 5];
const uniqueArray = array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
