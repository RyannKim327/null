function factorialLoop(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

const number = 5;
const factorial = factorialLoop(number);
console.log(`Factorial of ${number} is ${factorial}`);
function factorialRecursion(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialRecursion(num - 1);
  }
}

const number = 5;
const factorial = factorialRecursion(number);
console.log(`Factorial of ${number} is ${factorial}`);
Factorial of 5 is 120
