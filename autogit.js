function calculateMean(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const mean = sum / numbers.length;
    return mean;
}

// Example:
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
