function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

// Usage example:
const number = 5;
const factorial = factorialRecursive(number);
console.log(`The factorial of ${number} is: ${factorial}`);
function factorialLoop(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// Usage example:
const number = 5;
const factorial = factorialLoop(number);
console.log(`The factorial of ${number} is: ${factorial}`);
