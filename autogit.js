function largestPrimeFactor(number) {
  let largestPrime = 2;
  
  while (number % 2 === 0) {
    number /= 2;
  }
  
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrime = i;
      number /= i;
    }
  }
  
  if (number > 2) {
    largestPrime = number;
  }
  
  return largestPrime;
}

// Usage example
const number = 123456789;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
The largest prime factor of 123456789 is 3803
