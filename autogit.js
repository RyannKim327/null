function getStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

// Example usage
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length); // Outputs: 13
