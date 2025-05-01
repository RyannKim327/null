const numbers: number[] = [1, 5, 3, 9, 2];
const maxValue: number = Math.max(...numbers);
console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let maxValue: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

const maxValue: number = numbers.reduce((acc, curr) => Math.max(acc, curr), numbers[0]);
console.log(maxValue); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

const sortedNumbers = numbers.sort((a, b) => b - a);
const maxValue: number = sortedNumbers[0];
console.log(maxValue); // Output: 9
