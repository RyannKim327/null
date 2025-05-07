function isPrime(num: number): boolean {
  if (num <= 1) return false;      // 0, 1 and negative numbers are not prime
  if (num <= 3) return true;       // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false;  // multiples of 2 or 3 are not prime

  // Check divisors from 5 to sqrt(num), increment by 6 for efficiency
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
