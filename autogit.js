function findFirstRepeatedChar(str) {
  // Create an empty set to store the characters
  const charSet = new Set();

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    // If the character is already in the set, it is repeated
    if (charSet.has(char)) {
      return char;
    }

    // Add the character to the set
    charSet.add(char);
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage:
console.log(findFirstRepeatedChar("Hello World")); // Output: 'l'
