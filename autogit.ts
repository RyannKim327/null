function calculateMean(numbers: number[]): number {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return numbers.length === 0 ? 0 : sum / numbers.length;
}

// Example usage:
const values = [10, 20, 30, 40];
const mean = calculateMean(values);
console.log(mean); // Outputs: 25
