function calculateMean(numbers: number[]): number {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / numbers.length;
    return mean;
}

const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
