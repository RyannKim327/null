function isPrime(num) {
  // Check if the number is less than 2
  if (num < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
const number = 37;

if (isPrime(number)) {
  console.log(`${number} is prime.`);
} else {
  console.log(`${number} is not prime.`);
}
