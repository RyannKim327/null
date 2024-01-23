function isPrime(number) {
  // If number is less than 2, it's not prime
  if (number < 2) {
    return false;
  }
  
  // Check for divisibility from 2 to square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // Number is divisible, so it's not prime
      return false;
    }
  }
  
  // Number is not divisible, so it's prime
  return true;
}

// Test the function
console.log(isPrime(13));  // true
console.log(isPrime(25));  // false
console.log(isPrime(1));   // false
