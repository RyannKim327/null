function factorialRecursive(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  
  // Recursive case: factorial of n is n multiplied by factorial of n-1
  return n * factorialRecursive(n - 1);
}

// Usage example
const number = 5;
const result = factorialRecursive(number);
console.log(`Factorial of ${number} is ${result}`);
function factorialIterative(n) {
  let result = 1;
  
  // Multiply result by numbers from 1 to n
  for(let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Usage example
const number = 5;
const result = factorialIterative(number);
console.log(`Factorial of ${number} is ${result}`);
