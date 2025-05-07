function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

// Example usage:
const example = "Hello, world!";
console.log(getStringLength(example)); // Output: 13
