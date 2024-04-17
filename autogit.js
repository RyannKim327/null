function calculateMean(numbers) {
    const total = numbers.reduce((acc, val) => acc + val, 0);
    const mean = total / numbers.length;

    return mean;
}

const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);

console.log(mean); // Output: 3
