function getStringLength(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    counter++;
  }
  return counter;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length); // Output: 13
