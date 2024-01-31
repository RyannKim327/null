const array = [1, 3, 5, 2, 4];
const max = Math.max(...array);
console.log(max); // Output: 5
const array = [1, 3, 5, 2, 4];
const max = Math.max.apply(null, array);
console.log(max); // Output: 5
const array = [1, 3, 5, 2, 4];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max); // Output: 5
