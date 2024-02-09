function largestPrimeFactor(number) {
  let factor = 2;
  let maxFactor = 1;

  // Divide the number by 2 until it is no longer divisible
  while (factor <= number) {
    if (number % factor === 0) {
      number /= factor;
      maxFactor = factor;
    } else {
      factor++;
    }
  }

  return maxFactor;
}

// Example usage
const number = 84;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
