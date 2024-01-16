function isPrime(number) {
  // Check if the number is less than 2 (not prime)
  if (number < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any i, it's not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any i, it's prime
  return true;
}

// Testing the function
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
