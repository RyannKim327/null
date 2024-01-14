function largestPrimeFactor(number) {
  let largestPrime = 1;
  
  // Check for divisibility by 2
  while (number % 2 === 0) {
    largestPrime = 2;
    number /= 2;
  }
  
  // Check for divisibility by odd factors
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrime = i;
      number /= i;
    }
  }
  
  // Check if the remaining number is prime and greater than 1
  if (number > 1)
    largestPrime = number;
  
  return largestPrime;
}

// Example usage
console.log(largestPrimeFactor(13195));  // Output: 29
