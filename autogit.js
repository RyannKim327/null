const arr = [5, 2, 9, 1, 7];
const max = Math.max(...arr);
console.log(max); // Output: 9
const arr = [5, 2, 9, 1, 7];
const max = Math.max.apply(null, arr);
console.log(max); // Output: 9
const arr = [5, 2, 9, 1, 7];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); // Output: 9
const arr = [5, 2, 9, 1, 7];
const max = arr.reduce((a, b) => Math.max(a, b));
console.log(max); // Output: 9
