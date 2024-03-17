let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8];
let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
