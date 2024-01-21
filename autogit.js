function calculateStringLength(str) {
  let length = 0;
  
  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    // Increment the length counter
    length++;
  }
  
  return length;
}

const myString = "Hello, World!";
const stringLength = calculateStringLength(myString);
console.log(stringLength); // Output: 13
