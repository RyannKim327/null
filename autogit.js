function calculateMean(numbers) {
    if (numbers.length === 0) {
        return 0; // handle empty list
    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// Example usage
const numbers = [2, 4, 6, 8, 10];
const mean = calculateMean(numbers);
console.log(mean); // Output: 6
