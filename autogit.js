function calculateMean(numbers) {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  const mean = total / numbers.length;
  return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
