function calculateMean(numbers) {
    var sum = 0;
    var mean = 0;
    
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    mean = sum / numbers.length;
    
    return mean;
}

// Example usage
var numbers = [2, 4, 6, 8, 10];
var mean = calculateMean(numbers);
console.log("Mean: " + mean);
