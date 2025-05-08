function isPrime(num: number): boolean {
  if (num <= 1) return false; // 1 and below are not prime
  if (num <= 3) return true;  // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors from 5 to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // false
