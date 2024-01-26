function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 for an empty list
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Calculate the sum of all numbers
  }

  return sum / numbers.length; // Return the mean
}
const numbers = [5, 2, 9, 1, 7];
const mean = calculateMean(numbers);
console.log(mean); // Output: 4.8
