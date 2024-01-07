function calculateMean(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }

  const mean = sum / count;
  return mean;
}

// Example usage:
const numbers = [5, 10, 15, 20];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
