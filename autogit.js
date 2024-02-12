function factorialRecursive(num) {
  // Base case: if num is 0 or 1, return 1
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case: call the function with num-1 and multiply it with num
  return num * factorialRecursive(num - 1);
}

// Call the factorialRecursive function with a number
console.log(factorialRecursive(5)); // Output: 120
