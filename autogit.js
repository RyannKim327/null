function largestPrimeFactor(num) {
  let largestFactor = 1;

  // Iterate from 2 to square root of num
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      if (i > largestFactor) {
        largestFactor = i;
      }

      num /= i;
    }
  }

  if (num > largestFactor) {
    largestFactor = num;
  }

  return largestFactor;
}

// Usage example
console.log(largestPrimeFactor(123456789));  // Output: 3803
