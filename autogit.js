function calculateMean(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Example list of numbers
let numbers = [5, 10, 15, 20, 25];

// Calculate the mean of the list
let mean = calculateMean(numbers);

console.log("Mean: " + mean);
