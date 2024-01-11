const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
[1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray);
[1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = array.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);
console.log(uniqueArray);
[1, 2, 3, 4, 5, 6]
