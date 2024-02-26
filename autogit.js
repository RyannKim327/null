function calculateMean(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;

    return mean;
}

// Example list of numbers
const numbers = [2, 4, 6, 8, 10];

// Calculate and print the mean
const mean = calculateMean(numbers);
console.log("Mean:", mean);
