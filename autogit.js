function calculateMean(numbers) {
  const sum = numbers.reduce((total, currentValue) => total + currentValue, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean);  // Output: 3
