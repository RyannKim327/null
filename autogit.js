function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

const number = 5;
const factorialResult = factorial(number);
console.log(`The factorial of ${number} is: ${factorialResult}`);
