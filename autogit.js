function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 if the list is empty
  }

  var sum = numbers.reduce(function (a, b) {
    return a + b;
  });

  var mean = sum / numbers.length;
  return mean;
}

// Example usage
var numbers = [1, 2, 3, 4, 5];
var mean = calculateMean(numbers);
console.log(mean); // Output: 3
