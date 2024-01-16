function getStringLength(str) {
  let length = 0;
  // Loop through the characters in the string
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}

// Usage example:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length);  // Output: 13
