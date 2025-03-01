const numbers: number[] = [1, 5, 3, 9, 2];
const maxValue = Math.max(...numbers);
console.log(maxValue); // Outputs: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let maxValue: number = numbers[0]; // Start with the first element

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Outputs: 9
const numbers: number[] = [1, 5, 3, 9, 2];

const maxValue = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(maxValue); // Outputs: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let maxValue: number = numbers[0];

numbers.forEach(num => {
    if (num > maxValue) {
        maxValue = num;
    }
});

console.log(maxValue); // Outputs: 9
