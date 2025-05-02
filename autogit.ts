function largestPrimeFactor(n: number): number {
  let number = n;
  let largestFactor = -1;

  // Divide out all the 2s first
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  // Now check odd numbers from 3 up to sqrt(number)
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestFactor = i;
      number /= i;
    }
  }

  // If number is still greater than 2, it means number itself is prime
  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
