function findLargestPrimeFactor(number) {
  let largestPrime = 0;

  // Starting from the smallest prime, which is 2
  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      // Divide the number by the current loop variable
      number /= i;
      largestPrime = i;
    }
  }

  return largestPrime;
}

// Usage example
console.log(findLargestPrimeFactor(13195));  // Output: 29
