function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// Example usage:
const number = 5;
const factorial = factorialRecursive(number);
console.log(`Factorial of ${number} is ${factorial}`);
function factorialIterative(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// Example usage:
const number = 5;
const factorial = factorialIterative(number);
console.log(`Factorial of ${number} is ${factorial}`);
