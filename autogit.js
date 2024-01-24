function largestPrimeFactor(num) {
  if (num < 2) {
    return null;
  }

  let largestFactor = null;

  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      // num is divisible by i
      num /= i;
      largestFactor = i;
    }
  }

  if (num > 1) {
    largestFactor = num;
  }

  return largestFactor;
}

// Example usage
console.log(largestPrimeFactor(21));  // Output: 7
console.log(largestPrimeFactor(100)); // Output: 5
console.log(largestPrimeFactor(17));  // Output: 17
