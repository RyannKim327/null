const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
const original = [1, 2, 3, 4, 5];
const reversedCopy = original.slice().reverse();
console.log(original);     // Output: [1, 2, 3, 4, 5]
console.log(reversedCopy); // Output: [5, 4, 3, 2, 1]
