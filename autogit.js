function calculateMean(numbers) {
    var sum = numbers.reduce(function(a, b) { return a + b; }, 0);
    return sum / numbers.length;
}

// Example usage
var numbers = [1, 2, 3, 4, 5];
var mean = calculateMean(numbers);
console.log(mean);
