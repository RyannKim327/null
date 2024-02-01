function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character counts
  const charCount = {};

  // Loop through the string to count the occurrence of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Loop through the string again to find the first character with count 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const str = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
