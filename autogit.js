function calculateStringLength(str) {
  let count = 0;

  // Iterate through each character of the string
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }

  return count;
}

// Example usage
const myString = "Hello, World!";
const length = calculateStringLength(myString);
console.log(length); // Output: 13
