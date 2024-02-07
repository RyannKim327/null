function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Number is divisible, hence not prime
    }
  }

  return true; // Number is prime
}

// Testing the function
console.log(isPrime(7)); // true
console.log(isPrime(16)); // false
console.log(isPrime(23)); // true
