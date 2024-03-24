function calculateMean(numbers) {
    // Check if the input is a valid array
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }

    // Calculate the sum of all the numbers in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the mean by dividing the sum by the number of elements
    const mean = sum / numbers.length;

    return mean;
}

// Example list of numbers
const numbers = [2, 4, 6, 8, 10];

// Calculate the mean of the list of numbers
const mean = calculateMean(numbers);
console.log("Mean:", mean);
