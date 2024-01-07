function isPrime(number) {
  // 1 and numbers less than 1 are not prime
  if (number <= 1) {
    return false;
  }

  // Check for divisibility starting from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // Number is prime
  return true;
}
const number = 17;
const isNumberPrime = isPrime(number);
console.log(`Is ${number} a prime number? ${isNumberPrime}`);
Is 17 a prime number? true
