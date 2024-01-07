function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: multiply n with factorial of (n-1)
    return n * factorial(n - 1);
  }
}

// Example usage
const num = 5;
const result = factorial(num);

console.log(`Factorial of ${num} is ${result}`);
Factorial of 5 is 120
