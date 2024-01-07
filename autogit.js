const arr = [10, 5, 20, 8, 15];
const maxVal = Math.max(...arr);
console.log(maxVal); // Output: 20
const arr = [10, 5, 20, 8, 15];
const maxVal = Math.max.apply(null, arr);
console.log(maxVal); // Output: 20
