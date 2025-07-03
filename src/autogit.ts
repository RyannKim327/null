function isPrime(n: number): boolean {
  if (n <= 1) return false; // 0 and 1 are not prime
  if (n <= 3) return true;  // 2 and 3 are prime

  // Optimization: check divisibility only up to the square root of n
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      return false; // Divisible by i, so not prime
    }
  }
  return true; // No divisors found, number is prime
}
console.log(isPrime(2));   // true
console.log(isPrime(15));  // false
console.log(isPrime(17));  // true
console.log(isPrime(1));   // false
