const numbers = [1, 5, 2, 9, 4];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 9
const numbers = [1, 5, 2, 9, 4];
const max = Math.max(...numbers);
console.log(max); // Output: 9
