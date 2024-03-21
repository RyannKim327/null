let myArray = [1, 2, 3, 4, 5];
myArray.reverse();

console.log(myArray); // Output: [5, 4, 3, 2, 1]
let myArray = [1, 2, 3, 4, 5];
let reversedArray = [...myArray].reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(myArray); // Output: [1, 2, 3, 4, 5]
