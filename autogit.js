function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 for an empty list, but you can choose another value if desired
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / numbers.length;

  return mean;
}
const myList = [1, 2, 3, 4, 5];
const mean = calculateMean(myList);
console.log(mean); // Output: 3
