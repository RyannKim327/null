function isPrime(num: number): boolean {
  if (num <= 1) return false;             // 0 and 1 are not prime
  if (num <= 3) return true;              // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false; // divisible by 2 or 3

  // Check from 5 to sqrt(num), skipping multiples of 2 and 3
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
