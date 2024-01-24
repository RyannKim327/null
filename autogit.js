function findFirstRepeatedChar(str) {
  // Create an empty Set to store unique characters
  let uniqueChars = new Set();

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is already in the set
    if (uniqueChars.has(char)) {
      // Found the first repeated character
      return char;
    }

    // Add the character to the set
    uniqueChars.add(char);
  }

  // If no repeated character found, return null
  return null;
}

// Usage example
let str = "Hello World!";
let firstRepeatedChar = findFirstRepeatedChar(str);
console.log(firstRepeatedChar); // Output: l
