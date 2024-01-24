function factorialRecursive(num) {
  // Base case: if the number is 0 or 1, return 1
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case: multiply the number by the factorial of (num-1)
  return num * factorialRecursive(num - 1);
}
const num = 5;
const factorial = factorialRecursive(num);

console.log(`Factorial of ${num} is: ${factorial}`);
Factorial of 5 is: 120
