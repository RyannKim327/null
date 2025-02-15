function calculateMean(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Example usage:
const numList = [10, 20, 30, 40, 50];
const mean = calculateMean(numList);
console.log(`The mean is: ${mean}`);
if (numbers.length === 0) return 0; // or throw an error
