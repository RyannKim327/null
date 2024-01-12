function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any integer from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// Example usage
const number = 17;
if (isPrime(number)) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}
