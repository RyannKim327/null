const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
const reversedArr = [...arr].reverse();
console.log(arr);         // [1, 2, 3, 4, 5]
console.log(reversedArr); // [5, 4, 3, 2, 1]
