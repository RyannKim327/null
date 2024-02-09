const numbers = [2, 5, 1, 9, 4];
const max = Math.max(...numbers);

console.log(max); // Output: 9
const numbers = [2, 5, 1, 9, 4];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Output: 9
