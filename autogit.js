function calculateMean(numbers) {
  // Check if the input is valid
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  // Calculate the sum of all numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calculate the mean by dividing the sum by the number of elements
  const mean = sum / numbers.length;

  return mean;
}
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
