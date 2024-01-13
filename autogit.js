function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // handle empty list case
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Example usage:
const numbers = [2, 4, 6, 8, 10];
const mean = calculateMean(numbers);
console.log(mean); // Output: 6
