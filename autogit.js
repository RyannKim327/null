function calculateMean(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const mean = sum / numbers.length;
  return mean;
}

// Example usage
const numbers = [5, 10, 15, 20, 25];
const mean = calculateMean(numbers);
console.log(mean); // Output: 15
