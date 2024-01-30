const array = [1, 2, 5, 3, 4];

const max = Math.max(...array);

console.log(max); // Output: 5
const array = [1, 2, 5, 3, 4];

const max = array.reduce((a, b) => Math.max(a, b), 0);

console.log(max); // Output: 5
