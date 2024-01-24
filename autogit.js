const array = [1, 5, 3, 9, 2];
const max = Math.max(...array);
console.log(max); // Output: 9
const array = [1, 5, 3, 9, 2];
const max = Math.max.apply(null, array);
console.log(max); // Output: 9
