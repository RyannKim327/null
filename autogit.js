const array = [1, 5, 2, 9, 3];
const max = Math.max(...array);
console.log(max); // Output: 9
const array = [1, 5, 2, 9, 3];
let max = array[0]; // Assume first element as max

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max); // Output: 9
