function findFirstRepeatedCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If character already seen, return it as the first repeated character
    if (charCount[char]) {
      return char;
    }

    // Otherwise, update the count of the character
    charCount[char] = 1;
  }

  // No repeated character found
  return null;
}

// Example usage:
const str = "hello world";
const result = findFirstRepeatedCharacter(str);
console.log(result); // Outputs: "l"
