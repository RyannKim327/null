function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

// Example Usage
console.log(factorial(5)); // Output: 120
