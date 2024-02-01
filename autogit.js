let array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
let array = [1, 2, 3, 4, 5];
let reversedArray = array.slice().reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(array); // Output: [1, 2, 3, 4, 5]
