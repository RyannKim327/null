function factorial(n) {
  // Base case: factorial of 0 or 1 is always 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: factorial of n = n * factorial(n-1)
  return n * factorial(n - 1);
}

// Usage example
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
