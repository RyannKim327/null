const array = [1, 5, 3, 9, 2, 7];
const max = Math.max(...array);

console.log(max); // Output: 9
const array = [1, 5, 3, 9, 2, 7];
const max = array.reduce((a, b) => Math.max(a, b));

console.log(max); // Output: 9
