const array = [10, 5, 20, 15, 8];

const max = Math.max(...array);

console.log(max); // Output: 20
const array = [10, 5, 20, 15, 8];

const max = Math.max.apply(null, array);

console.log(max); // Output: 20
