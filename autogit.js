const array = [2, 5, 9, 1, 4];
const max = Math.max(...array);

console.log(max);  // Output: 9
const array = [2, 5, 9, 1, 4];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);  // Output: 9
