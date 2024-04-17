function factorial(n) {
  if (n === 0) {
    // Base case: 0! = 1
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Usage example
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
