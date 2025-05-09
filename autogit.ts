function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

// Example:
const myString = "Hello, world!";
console.log(getStringLength(myString));  // Output: 13
