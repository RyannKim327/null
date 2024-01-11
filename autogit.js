function calculateMean(numbers) {
  let sum = 0;
  const totalNumbers = numbers.length;

  for (let i = 0; i < totalNumbers; i++) {
    sum += numbers[i];
  }

  const mean = sum / totalNumbers;
  return mean;
}
