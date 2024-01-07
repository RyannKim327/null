function calculateMean(numbers) {
  var sum = 0;
  var count = numbers.length;

  for (var i = 0; i < count; i++) {
    sum += numbers[i];
  }

  var mean = sum / count;
  return mean;
}

// Example usage
var numbers = [2, 4, 6, 8, 10];
var mean = calculateMean(numbers);
console.log("Mean:", mean);
