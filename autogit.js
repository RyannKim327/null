function getStringLength(str) {
  let length = 0;
  let index = 0;
  while (str[index] !== undefined) {
    length++;
    index++;
  }
  return length;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length);  // Output: 13
