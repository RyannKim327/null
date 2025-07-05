function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example usage:
const myNumbers = [10, 20, 30, 40, 50];
const average = calculateMean(myNumbers);
console.log(`The mean is: ${average}`);
