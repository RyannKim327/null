function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  // Check if number is divisible by any number from 2 to square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
const number = 29;  // Example number to check

if (isPrime(number)) {
  console.log(number + ' is prime.');
} else {
  console.log(number + ' is not prime.');
}
