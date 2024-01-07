function calculateMean(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  const mean = sum / numbers.length;

  return mean;
}

const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean);
