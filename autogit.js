function calculateMean(numbers) {
  // Check if the numbers array is empty
  if (numbers.length === 0) {
    return 0; // return 0 for an empty array, but you can change this behavior if needed
  }

  // Calculate the sum of all numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Calculate the mean by dividing the sum by the total number of elements
  const mean = sum / numbers.length;

  return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
