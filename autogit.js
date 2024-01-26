function largestPrimeFactor(number) {
  let factor = 2;

  while (factor <= number) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }

  return factor;
}

// Example usage
const number = 123456789; // The number you want to find the largest prime factor of
const largestFactor = largestPrimeFactor(number);
console.log("Largest Prime Factor: " + largestFactor);
