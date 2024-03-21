function calculateMean(numbers) {
  // Check if the numbers array is not empty
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  
  return mean;
}

// Example usage
const numbers = [2, 4, 6, 8, 10];
const mean = calculateMean(numbers);
console.log(`Mean: ${mean}`);
