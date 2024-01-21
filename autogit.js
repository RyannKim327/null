// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to find the largest prime factor
function largestPrimeFactor(num) {
  let largestFactor = 1;
  
  // Divide the number by 2 until it is odd
  while (num % 2 === 0) {
    largestFactor = 2;
    num = num / 2;
  }
  
  // Check for prime factors starting from 3
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      largestFactor = i;
      num = num / i;
    }
  }
  
  // When num is a prime number greater than 2
  if (num > 2) {
    largestFactor = num;
  }
  
  return largestFactor;
}

// Example usage
const number = 600851475143;
const result = largestPrimeFactor(number);
console.log("Largest prime factor of", number, "is", result);
