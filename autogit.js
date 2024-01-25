function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  return sum / numbers.length;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log("Mean:", mean);
