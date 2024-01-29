function calculateMean(numbers) {
  if(numbers.length === 0) {
    return 0; // or display an error message
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mean = (sum / numbers.length).toFixed(2);

  return mean;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
