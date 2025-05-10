const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
const reversedArr = arr.slice().reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5] (original stays intact)
