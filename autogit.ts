let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
let arr = [1, 2, 3, 4, 5];
let reversedArr = [...arr].slice().reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]
