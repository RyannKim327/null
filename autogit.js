let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = Array.from(new Set(arr));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
