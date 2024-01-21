function largestPrimeFactor(num) {
  let maxPrime = 2;

  while (num % 2 === 0) {
    num /= 2;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      maxPrime = i;
      num /= i;
    }
  }

  if (num > 2) {
    maxPrime = num;
  }

  return maxPrime;
}
console.log(largestPrimeFactor(13195)); // Output: 29 (largest prime factor of 13195)
console.log(largestPrimeFactor(600851475143)); // Output: 6857 (largest prime factor of 600851475143)
