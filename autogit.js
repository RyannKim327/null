function largestPrimeFactor(number) {
  let divisor = 2;
  while (divisor <= number) {
    if (number % divisor === 0) {
      number /= divisor;
    } else {
      divisor++;
    }
  }
  return divisor;
}

// Usage example
const number = 123456789;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
