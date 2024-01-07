function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charFreq = {};

  // Loop through each character in the string and count its frequency
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFreq[char] = charFreq[char] + 1 || 1;
  }

  // Loop through the string again and find the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFreq[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const str = "aabbccddee";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar);
