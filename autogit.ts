function getStringLength(str: string): number {
  let length = 0;
  for (const char of str) {
    length++;
  }
  return length;
}

// Example usage:
const myString = "Hello, world!";
console.log(getStringLength(myString));  // Outputs: 13
