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

// Example usage
console.log(factorial(5)); // Output: 120
