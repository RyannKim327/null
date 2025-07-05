const numbers: number[] = [1, 5, 2, 9, 3];
const max = Math.max(...numbers);
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 2, 9, 3];
const max = numbers.reduce((accumulator, current) => {
    return current > accumulator ? current : accumulator;
}, numbers[0]); // Initialize with the first element
console.log(max); // Output: 9
const numbers: number[] = [1, 5, 2, 9, 3];
let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // Output: 9
const numbers: number[] = [1, 5, 2, 9, 3];
let max = numbers[0];

numbers.forEach(num => {
    if (num > max) {
        max = num;
    }
});

console.log(max); // Output: 9
