function largestPrimeFactor(number) {
  let n = number;
  let i = 2;

  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      n = n / i;
    } else {
      i++;
    }
  }

  if (n > 1) {
    return n;
  } else {
    return i;
  }
}

// Example usage
console.log(largestPrimeFactor(13195));  // Output: 29
