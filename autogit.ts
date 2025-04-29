function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0; // or handle empty case differently
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Usage example:
const myNumbers = [10, 20, 30, 40, 50];
const mean = calculateMean(myNumbers);
console.log(mean); // Output: 30
