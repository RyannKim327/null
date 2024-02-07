function largestPrimeFactor(n) {
  let largestFactor = 1;

  while (n % 2 === 0) {
    largestFactor = 2;
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      largestFactor = i;
      n = n / i;
    }
  }

  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143));  // Output: 6857
