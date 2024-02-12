function largestPrimeFactor(number) {
  let largestFactor = 1;
  
  // Divide by 2 repeatedly while divisible
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }
  
  // Check odd factors
  let factor = 3;
  const maxFactor = Math.sqrt(number);
  while (factor <= maxFactor) {
    if (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    } else {
      factor += 2; // Consider only odd factors
    }
  }
  
  // If the number is prime itself
  if (number > 1) {
    largestFactor = number;
  }
  
  return largestFactor;
}

// Example usage
const number = 123456789;
const largestFactor = largestPrimeFactor(number);
console.log("Largest prime factor of", number, "is", largestFactor);
Largest prime factor of 123456789 is 3803
