function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty array.");
  }

  const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  return sum / numbers.length;
}

// Example use:
const myNumbers = [10, 20, 30, 40, 50];
const mean = calculateMean(myNumbers);
console.log(mean); // Outputs: 30
