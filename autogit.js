function calculateMean(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / numbers.length;
  
    return mean;
}

// Example list of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate the mean
const mean = calculateMean(numbers);

console.log("Mean:", mean);
