function isPrime(number) {
  if (number === 2) {
    return true;
  } else if (number < 2 || number % 2 === 0) {
    return false;
  }
  
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(12)); // false
console.log(isPrime(31)); // true
