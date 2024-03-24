function factorial(n) {
  // Base case: if n is 0, return 1
  if (n === 0) {
    return 1;
  } else {
    // Recursive case: return n * factorial(n-1)
    return n * factorial(n - 1);
  }
}

// Test the factorial function with a number
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
