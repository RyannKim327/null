function largestPrimeFactor(n: number): number {
  let number = n;
  let largestFactor = -1;

  // Divide out all factors of 2
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  // Check odd factors from 3 up to sqrt(number)
  let factor = 3;
  while (factor * factor <= number) {
    while (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    }
    factor += 2;
  }

  // If number is still greater than 2, it is prime
  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}
console.log(largestPrimeFactor(13195)); // Outputs: 29
console.log(largestPrimeFactor(600851475143)); // Outputs: 6857
