function findFirstNonRepeatingCharacter(str) {
  // Create a frequency map to store character counts
  const frequencyMap = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Update the character's count in the frequency map
    frequencyMap[char] = frequencyMap[char] ? frequencyMap[char] + 1 : 1;
  }

  // Iterate over each character in the string again
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the current character's count is 1 in the frequency map
    if (frequencyMap[char] === 1) {
      return char; // The first non-repeating character found
    }
  }

  return null; // Returns null if no non-repeating character is found
}

// Usage example
const str = "aabbccd";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "d"
