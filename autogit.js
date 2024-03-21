function calculateMean(numbers) {
    // Check if the input is valid
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    // Calculate the sum of all numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    // Calculate the mean
    const mean = sum / numbers.length;

    return mean;
}

// Example list of numbers
const numbers = [5, 10, 15, 20, 25];

// Calculate the mean
const mean = calculateMean(numbers);

console.log('Mean:', mean);
