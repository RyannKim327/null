function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;

  while (factor <= number) {
    if (number % factor === 0) {
      // Check if factor is prime
      if (isPrime(factor)) {
        largestFactor = factor;
      }
      // Reduce the number by dividing it with the factor
      number /= factor;
    } else {
      // Increment the factor if it is not a factor of the number
      factor++;
    }
  }

  return largestFactor;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to its square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Test the function
const number = 1234567890;
const largestFactor = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is ${largestFactor}`);
