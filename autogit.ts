function isPrime(num: number): boolean {
  if (num < 2) return false;  // 0 and 1 are not prime
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));  // true  
console.log(isPrime(10)); // false  
