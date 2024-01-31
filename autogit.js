function calculateMean(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const mean = sum / numbers.length;
  return mean;
}

// Example usage:
const numbers = [4, 7, 2, 9, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 5.4
