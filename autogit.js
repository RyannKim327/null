function calculateMean(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  const mean = sum / numbers.length;
  
  return mean;
}

// Example usage
const numbers = [2, 4, 6, 8, 10];
const mean = calculateMean(numbers);
console.log("Mean:", mean); // Output: Mean: 6
