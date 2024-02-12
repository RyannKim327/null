function getStringLength(str) {
  let count = 0;

  // iterate through each character of the string
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }

  return count;
}

// Example usage
const str = "Hello, World!";
const length = getStringLength(str);
console.log(length); // Output: 13
