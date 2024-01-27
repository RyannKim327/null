function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;

  while (factor <= number) {
    if (number % factor === 0) {
      largestFactor = factor;
      number = number / factor;
    } else {
      factor++;
    }
  }

  return largestFactor;
}
const number = 84;
const largestFactor = largestPrimeFactor(number);
console.log('Largest Prime Factor:', largestFactor);
Largest Prime Factor: 7
