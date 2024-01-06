function isPrime(number) {
  // Check if number is less than 2
  if (number < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any value in the loop, it is not prime
    if (number % i === 0) {
      return false;
    }
  }

  // The number is prime if it is not divisible by any value in the loop
  return true;
}

// Example usage
const number = 13;
if (isPrime(number)) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
