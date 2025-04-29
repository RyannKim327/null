function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0, 1 and negatives are not prime
  if (num <= 3) return true;  // 2 and 3 are prime

  // Eliminate multiples of 2 and 3 early
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check divisors from 5 to sqrt(num), jumping by 6 to skip multiples of 2 and 3
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
