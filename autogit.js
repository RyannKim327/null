function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage
let num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
