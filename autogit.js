function isPrime(number) {
  if (number <= 1) { // 0 and 1 are not prime
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible by any number from 2 to sqrt(number), it's not prime
    }
  }

  return true; // If not divisible by any number, it's prime
}
const number = 17;
console.log(isPrime(number)); // Output: true
