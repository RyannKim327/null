function getStringLength(str) {
  let length = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}

// Example usage:
const str = "Hello, world!";
const length = getStringLength(str);
console.log(length); // Output: 13
