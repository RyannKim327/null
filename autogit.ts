let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
let arr = [1, 2, 3, 4, 5];
let reversedArr = [...arr].reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5] (original array remains unchanged)
