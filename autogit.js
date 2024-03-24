function calculateMean(numbers) {
    // Ensure the array is not empty
    if (numbers.length === 0) {
        return 0;
    }

    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((total, num) => total + num);

    // Calculate the mean
    const mean = sum / numbers.length;

    return mean;
}

// Test the function
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
