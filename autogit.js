function calculateMean(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// Example list of numbers
const numbers = [1, 2, 3, 4, 5];

const mean = calculateMean(numbers);
console.log("Mean:", mean);
