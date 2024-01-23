function calculateMean(numbers) {
    var sum = 0;
    var count = numbers.length;
    
    for (var i = 0; i < count; i++) {
        sum += numbers[i];
    }
    
    var mean = sum / count;
    return mean;
}

// Example usage:
var numberList = [1, 3, 5, 7, 9];
var meanValue = calculateMean(numberList);
console.log(meanValue); // Output: 5
