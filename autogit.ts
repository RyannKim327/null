function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

// Usage
const myString = "Hello, World!";
console.log(getStringLength(myString)); // Outputs: 13
