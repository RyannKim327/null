function factorialIterative(num) {
  let result = 1;
  for(let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

const number = 5;
console.log(`Factorial of ${number} (iterative approach): ${factorialIterative(number)}`);
function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

const number = 5;
console.log(`Factorial of ${number} (recursive approach): ${factorialRecursive(number)}`);
