function factorialRecursive(num) {
  // Base case: factorial of 0 or 1 is 1
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case: multiply num with factorial of num-1
  return num * factorialRecursive(num - 1);
}

// Usage
console.log(factorialRecursive(5)); // Output: 120
function factorialIterative(num) {
  let result = 1;
  
  // Multiply result with numbers from 2 to num
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  
  return result;
}

// Usage
console.log(factorialIterative(5)); // Output: 120
