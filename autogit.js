function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  var mean = sum / numbers.length;
  return mean;
}

var numbers = [1, 2, 3, 4, 5];
var mean = calculateMean(numbers);
console.log(mean); // Output: 3
