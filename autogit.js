function findFirstNonRepeatingChar(str) {
  // Create an empty map to store character frequencies
  const charFrequencies = new Map();

  // Iterate through the string and update character frequencies
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequencies.has(char)) {
      charFrequencies.set(char, charFrequencies.get(char) + 1);
    } else {
      charFrequencies.set(char, 1);
    }
  }

  // Iterate through the string again and find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequencies.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage:
const str = "aabbcde";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar);  // Output: 'c'
