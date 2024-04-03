let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
