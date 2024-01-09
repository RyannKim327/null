function getStringLength(str) {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
}

// Usage
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length); // Output: 13
