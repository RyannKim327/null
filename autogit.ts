function isPrime(num: number): boolean {
  if (num <= 1) return false;       // 0 and 1 are not prime
  if (num <= 3) return true;        // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check divisors up to square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
console.log(isPrime(7));   // true
console.log(isPrime(15));  // false
console.log(isPrime(97));  // true
console.log(isPrime(1));   // false
