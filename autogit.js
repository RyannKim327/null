function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean);
