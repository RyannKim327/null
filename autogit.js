function calculateMean(numbers) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
      count++;
    }
  }

  if (count === 0) {
    return 0; // or handle the error in another way
  } else {
    return sum / count;
  }
}

// Example usage
var numbers = [1, 2, 3, 4, 5];
var mean = calculateMean(numbers);
console.log(mean); // Output: 3
