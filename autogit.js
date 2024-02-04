function largestPrimeFactor(number) {
  let largestPrime = 2;

  while (number % 2 === 0) {
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrime = i;
      number /= i;
    }
  }

  if (number > 2) {
    largestPrime = number;
  }

  return largestPrime;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
