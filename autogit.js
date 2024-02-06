function calculateMean(numbers) {
  // Check if the list is empty
  if (numbers.length === 0) {
    return 0;
  }

  // Compute the sum of all numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Calculate the mean by dividing the sum by the number of elements
  const mean = sum / numbers.length;

  return mean;
}

// Example usage
const numbers = [3, 5, 7, 11, 13];
const mean = calculateMean(numbers);
console.log(mean); // Output: 7.8
