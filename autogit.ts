function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 aren't prime
  if (num <= 3) return true;  // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

  // Check divisors up to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
