function calculateMean(numbers) {
    let sum = 0;
    
    // Calculate the sum of all numbers in the list
    numbers.forEach(function(number) {
        sum += number;
    });
    
    // Calculate the mean (average)
    let mean = sum / numbers.length;
    
    return mean;
}

// Example list of numbers
let numbers = [2, 4, 6, 8, 10];

// Calculate the mean
let mean = calculateMean(numbers);

console.log("Mean:", mean);
