const numbers = [10, 5, 100, 2, 1000];
const max = Math.max(...numbers);
console.log(max); // 1000
const numbers = [10, 5, 100, 2, 1000];
const max = numbers.reduce((a, b) => (a > b ? a : b), numbers[0]);
console.log(max); // 1000
const numbers = [10, 5, 100, 2, 1000];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // 1000
