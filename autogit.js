const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray);
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
console.log(uniqueArray);
