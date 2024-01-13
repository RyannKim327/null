function calculateMean(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return 0;
  }

  // Calculate the sum of all numbers
  var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  // Calculate the mean by dividing the sum by the number of elements
  var mean = sum / numbers.length;

  return mean;
}

// Usage example
var list = [1, 2, 3, 4, 5];
var meanValue = calculateMean(list);
console.log('Mean:', meanValue);
