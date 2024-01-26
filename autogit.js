function calculateMean(numbers) {
  // Check if the input is empty
  if (numbers.length === 0) {
    return 0;
  }
  
  // Calculate the sum of all numbers
  var sum = numbers.reduce(function(a, b) {
    return a + b;
  });
  
  // Calculate the mean by dividing the sum by the number of elements
  var mean = sum / numbers.length;
  
  return mean;
}

// Example usage
var numbers = [1, 2, 3, 4, 5];
var mean = calculateMean(numbers);
console.log(mean); // Output: 3
