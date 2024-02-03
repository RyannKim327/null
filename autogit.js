function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false; // Divisible by a number other than 1 and itself
    }
  }
  
  return true; // Number is prime
}
const number = 7; // The number to check

if (isPrime(number)) {
  console.log(number + ' is a prime number.');
} else {
  console.log(number + ' is not a prime number.');
}
