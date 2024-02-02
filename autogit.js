function calculateMean(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const mean = (sum / numbers.length).toFixed(2);
  return mean;
}

// Usage example
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3.00
