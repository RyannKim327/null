function findFirstNonRepeatingCharacter(str) {
  const charFreq = {};

  // Loop through the string and update character frequencies
  for (const char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Loop through the string and check character frequencies
  for (const char of str) {
    if (charFreq[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // Return null if no non-repeating character is found
}

// Example usage
const input = 'aabbcdeff';
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);
console.log(firstNonRepeatingChar); // Output: 'c'
