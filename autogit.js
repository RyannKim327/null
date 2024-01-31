function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  
  return sum / numbers.length;
}

// Example usage
var numbers = [2, 4, 6, 8, 10];
var mean = calculateMean(numbers);
console.log("Mean:", mean);
