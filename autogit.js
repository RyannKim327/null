function largestPrimeFactor(number) {
  let factors = [];
  let divisor = 2;

  while (number >= 2) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return Math.max(...factors);
}

// Example usage
const number = 13195;
const largestFactor = largestPrimeFactor(number);
console.log("Largest prime factor:", largestFactor);
