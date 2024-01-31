function calculateMean(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example usage
const numbers = [5, 10, 15, 20, 25];
const mean = calculateMean(numbers);
console.log(mean); // Output: 15
