const arr = [3, 9, 2, 7, 5];

const max = Math.max(...arr);
console.log(max); // Output: 9
const arr = [3, 9, 2, 7, 5];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); // Output: 9
