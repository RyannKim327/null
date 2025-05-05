function getStringLength(str: string): number {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

// Example usage:
const testStr = "Hello, world!";
console.log(getStringLength(testStr)); // Output: 13
