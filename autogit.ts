const numbers: number[] = [3, 5, 1, 8, 2];
const maxValue = Math.max(...numbers);
console.log(maxValue); // Output: 8
const numbers: number[] = [3, 5, 1, 8, 2];
let maxValue: number = numbers[0]; // Assume the first element is the largest

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 8
const numbers: number[] = [3, 5, 1, 8, 2];
const maxValue = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(maxValue); // Output: 8
const numbers: number[] = [3, 5, 1, 8, 2];
let maxValue: number = numbers[0]; // Assume the first element is the largest

numbers.forEach(num => {
    if (num > maxValue) {
        maxValue = num;
    }
});

console.log(maxValue); // Output: 8
