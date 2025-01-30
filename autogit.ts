const arr = [3, 1, 4, 2, 5];
const maxValue = Math.max(...arr);
console.log(maxValue); // outputs 5
const arr = [3, 1, 4, 2, 5];
const maxValue = arr.reduce((max, current) => Math.max(max, current), -Infinity);
console.log(maxValue); // outputs 5
const arr = [3, 1, 4, 2, 5];
const maxValue = arr.reduce((a, b) => a > b ? a : b);
console.log(maxValue); // outputs 5
