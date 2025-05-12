function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
  }
  
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage:
const values = [10, 20, 30, 40, 50];
const mean = calculateMean(values);
console.log(mean); // Output: 30
