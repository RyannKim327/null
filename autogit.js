function isPrime(number) {
  // Check if the number is less than 2 (not prime)
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any integer from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If the number passes all the checks, it is prime
  return true;
}

// Testing the function
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
