const numbers = [1, 5, 2, 9, 3, 6];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 9
const numbers = [1, 5, 2, 9, 3, 6];
const maxNumber = numbers.reduce((max, current) => {
  return Math.max(max, current);
});
console.log(maxNumber); // Output: 9
const numbers = [1, 5, 2, 9, 3, 6];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber); // Output: 9
