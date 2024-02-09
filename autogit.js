function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  var mean = sum / numbers.length;
  return mean;
}

// Example usage:
var numbers = [5, 12, 3, 8, 9];
var mean = calculateMean(numbers);
console.log("Mean: " + mean);
