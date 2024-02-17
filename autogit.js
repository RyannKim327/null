function calculateMean(numbers) {
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const mean = sum / numbers.length;
    return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(`Mean: ${mean}`);
