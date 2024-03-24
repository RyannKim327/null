function calculateStringLength(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

// Example usage
const myString = "Hello, World!";
const length = calculateStringLength(myString);
console.log('Length of string:', length); // Output: Length of string: 13
