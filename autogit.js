function calculateMean(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [5, 10, 15, 20, 25];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
