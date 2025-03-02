const numbers: number[] = [1, 2, 3, 4, 5];
const maxValue = Math.max(...numbers);
console.log(maxValue); // Output: 5
const numbers: number[] = [1, 2, 3, 4, 5];

let maxValue = numbers[0]; // Assume the first element is the maximum

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(maxValue); // Output: 5
const numbers: number[] = [1, 2, 3, 4, 5];

const maxValue = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);

console.log(maxValue); // Output: 5
const numbers: number[] = [1, 2, 3, 4, 5];

let maxValue = numbers[0]; // Assume the first element is the maximum

numbers.forEach(num => {
    if (num > maxValue) {
        maxValue = num;
    }
});

console.log(maxValue); // Output: 5
