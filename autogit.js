function findFirstNonRepeatingChar(str) {
  const charCounts = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // If no non-repeating characters are found, return null or an appropriate value
  return null;
}

// Example usage
const input = "aabbccddef";
const result = findFirstNonRepeatingChar(input);
console.log(result); // Output: "e"
