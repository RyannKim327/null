function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If a divisor is found, it is not prime
    }
  }
  return true; // If no divisors are found, it is prime
}
function findLargestPrimeFactor(number) {
  let largestFactor = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && isPrime(i)) {
      largestFactor = i;
    }
  }
  return largestFactor;
}
let number = 1234567890; // Replace with your desired number
let largestPrimeFactor = findLargestPrimeFactor(number);
console.log("The largest prime factor of", number, "is", largestPrimeFactor);
