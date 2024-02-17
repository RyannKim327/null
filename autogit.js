function calculateMean(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    
    return sum / numbers.length;
}

// Example list of numbers
const numbers = [3, 5, 7, 9, 11];

const mean = calculateMean(numbers);
console.log("Mean:", mean);
