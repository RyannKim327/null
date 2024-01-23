function largestPrimeFactor(number) {
  let factor = 2;
  let largestPrime = 1;

  while (number > 1) {
    if (number % factor === 0) {
      largestPrime = factor;
      number /= factor;
    } else {
      factor++;
    }
  }

  return largestPrime;
}

// Test the function
const number = 13195;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}.`);
The largest prime factor of 13195 is 29.
