const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const uniqueArr = [...new Set(arr)];
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
