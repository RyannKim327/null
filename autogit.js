function calculateMean(numbers) {
    const sum = numbers.reduce((total, current) => total + current, 0);
    return sum / numbers.length;
}

// Example usage
const numbers = [3, 5, 8, 12, 6];
const mean = calculateMean(numbers);
console.log(`Mean: ${mean}`);
