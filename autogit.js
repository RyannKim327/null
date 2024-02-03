let array = [1, 2, 3, 4, 5];
array.reverse();

console.log(array); // [5, 4, 3, 2, 1]
let array = [1, 2, 3, 4, 5];
let reversedArray = array.slice().reverse();

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(array); // [1, 2, 3, 4, 5]
