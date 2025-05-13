function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty array");
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage:
const data = [1, 2, 3, 4, 5];
const mean = calculateMean(data);
console.log(mean); // Outputs: 3
