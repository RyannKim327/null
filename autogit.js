function calculateMean(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

// Example list of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the mean of the numbers
const mean = calculateMean(numbers);
console.log("Mean:", mean);
