function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0, 1 and negative numbers are not prime
  if (num <= 3) return true;  // 2 and 3 are prime

  if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3 quickly

  // check divisors from 5 to sqrt(num), skipping even numbers and multiples of 3
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
