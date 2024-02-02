function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // handle the case of an empty array
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const mean = sum / numbers.length;
  return mean;
}

// Example usage:
const numbers = [5, 10, 15, 20];
const mean = calculateMean(numbers);
console.log(mean); // Output: 12.5
