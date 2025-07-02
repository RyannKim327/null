function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example usage:
const myNumbers = [10, 20, 30, 40, 50];
console.log(calculateMean(myNumbers)); // Output: 30
