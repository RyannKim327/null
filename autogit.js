function largestPrimeFactor(number) {
  let largestFactor = 1;

  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  let sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    while (number % i === 0) {
      largestFactor = i;
      number /= i;
    }
  }

  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}

// Usage example
console.log(largestPrimeFactor(13195)); // Output: 29
