const arr = [5, 3, 9, 1, 7];
const max = Math.max(...arr);
console.log(max); // 9
const arr = [5, 3, 9, 1, 7];
const max = arr.reduce((acc, val) => (val > acc ? val : acc), arr[0]);
console.log(max); // 9
const arr = [5, 3, 9, 1, 7];
let max = arr[0];
for (const num of arr) {
  if (num > max) {
    max = num;
  }
}
console.log(max); // 9
