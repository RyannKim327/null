function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

// Example usage:
const myString = "Hello, world!";
console.log(getStringLength(myString)); // Outputs: 13
