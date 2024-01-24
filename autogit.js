const array = [5, 8, 1, 9, 3];
const max = Math.max(...array);
console.log(max); // Output: 9
const array = [5, 8, 1, 9, 3];
const max = array.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 9
