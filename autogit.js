const numbers = [2, 4, 6, 8, 10];

const sum = numbers.reduce((total, number) => total + number, 0);
const mean = sum / numbers.length;

console.log(`Mean: ${mean}`);
Sum: 2 + 4 + 6 + 8 + 10 = 30
Mean: 30 / 5 = 6
