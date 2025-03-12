const numbers: number[] = [1, 5, 3, 9, 2];
const max = Math.max(...numbers);
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let max = numbers[0]; // Assume the first element is the max initially
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 3, 9, 2];

let max = numbers[0];
numbers.forEach(num => {
    if (num > max) {
        max = num;
    }
});

console.log(max); // Output: 9
