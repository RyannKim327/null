function factorialRecursive(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: multiply the number by factorial of (n-1)
  return n * factorialRecursive(n - 1);
}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`Factorial of ${number} is ${factorial}`);
function factorialIterative(n) {
  let result = 1;
  
  // Multiply the numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

const number = 5;
const factorial = factorialIterative(number);
console.log(`Factorial of ${number} is ${factorial}`);
