function calculateMean(list) {
    if (list.length === 0) {
        return 0;
    }

    const sum = list.reduce((acc, val) => acc + val, 0);
    const mean = sum / list.length;

    return mean;
}

// Example list of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the mean of the list
const mean = calculateMean(numbers);
console.log("Mean:", mean);
