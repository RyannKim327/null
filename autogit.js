function calculateMean(numbers) {
  let sum = 0;

  // Calculate the sum of all numbers
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Calculate the mean by dividing the sum by the number of elements
  const mean = sum / numbers.length;

  return mean;
}

// Example usage
const numbers = [5, 10, 15, 20, 25];
const mean = calculateMean(numbers);
console.log('Mean:', mean);
