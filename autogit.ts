const numbers = [3, 7, 2, 9, 5];
const max = Math.max(...numbers);
console.log(max); // 9
const numbers = [3, 7, 2, 9, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max); // 9
const numbers = [3, 7, 2, 9, 5];
const max = numbers.reduce((a, b) => (a > b ? a : b));
console.log(max); // 9
