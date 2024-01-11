function largestPrimeFactor(number) {
  let largestPrime = 2; // Initialize the largest prime factor to 2
  
  // Divide the number by 2 until it is no longer divisible by 2
  while (number % 2 === 0) {
    largestPrime = 2;
    number /= 2;
  }
  
  // Check for prime factors starting from 3
  let factor = 3;
  while (factor <= Math.sqrt(number)) {
    if (number % factor === 0) {
      largestPrime = factor;
      number /= factor;
    } else {
      factor += 2; // Increment factor by 2 to skip even numbers
    }
  }
  
  // If the remaining number is greater than 2, it must be prime
  if (number > 2) {
    largestPrime = number;
  }
  
  return largestPrime;
}

// Example usage
console.log(largestPrimeFactor(600851475143)); // Outputs: 6857
