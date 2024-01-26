function calculateMean(numbers) {
  // Check if the input is a valid array of numbers
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('The input is not a valid array of numbers.');
  }

  // Calculate the sum of all numbers in the array
  const sum = numbers.reduce((a, b) => a + b, 0);

  // Calculate the mean by dividing the sum by the number of elements
  const mean = sum / numbers.length;

  return mean;
}
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
