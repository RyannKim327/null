const array = [4, 6, 2, 9, 1];
const max = Math.max(...array);
console.log(max); // Output: 9
const array = [4, 6, 2, 9, 1];
const max = Math.max.apply(null, array);
console.log(max); // Output: 9
const array = [4, 6, 2, 9, 1];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max); // Output: 9
const array = [4, 6, 2, 9, 1];
const max = array.reduce((a, b) => Math.max(a, b));
console.log(max); // Output: 9
