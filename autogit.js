function calculateMean(numbers) {
  let sum = 0;
  const count = numbers.length;

  for (let i = 0; i < count; i++) {
    sum += numbers[i];
  }

  const mean = sum / count;
  return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
