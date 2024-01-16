function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Example usage
const number = 5;
const result = factorialRecursive(number);
console.log(`Factorial of ${number} is: ${result}`);
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
const number = 5;
const result = factorialIterative(number);
console.log(`Factorial of ${number} is: ${result}`);
