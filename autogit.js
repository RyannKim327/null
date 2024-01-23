function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // Considering an empty list has a mean of 0, you can change this if desired
  }
  
  var sum = numbers.reduce(function(a, b) {
    return a + b;
  });
  
  return sum / numbers.length;
}

// Example usage
var numbersList = [1, 2, 3, 4, 5];
var mean = calculateMean(numbersList);
console.log(mean); // Output: 3
