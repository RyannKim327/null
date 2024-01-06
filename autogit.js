function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by i, it is not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any number from 2 to its square root, it is prime
  return true;
}
const number = 17;
if (isPrime(number)) {
  console.log(`${number} is prime`);
} else {
  console.log(`${number} is not prime`);
}
