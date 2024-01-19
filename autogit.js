function factorial(n) {
  // Base case: factorial(0) = 1
  if (n === 0) {
    return 1;
  }
  
  // Recursive case: factorial(n) = n * factorial(n-1)
  return n * factorial(n - 1);
}

// Example usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
