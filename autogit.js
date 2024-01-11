function factorialRecursive(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorialRecursive(number - 1);
  }
}

// Usage example
console.log(factorialRecursive(5)); // Output: 120
