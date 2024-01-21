function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character frequencies
  let charFreq = {};

  // Iterate over the string to count character frequencies
  for (let char of str) {
    if (charFreq.hasOwnProperty(char)) {
      // If the character is already in the object, increase its count
      charFreq[char]++;
    } else {
      // Otherwise, add the character to the object with count 1
      charFreq[char] = 1;
    }
  }

  // Iterate over the string again to find the first non-repeating character
  for (let char of str) {
    if (charFreq[char] === 1) {
      // Return the first non-repeating character
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage:
console.log(findFirstNonRepeatingCharacter("abcab")); // Output: "c"
console.log(findFirstNonRepeatingCharacter("aabbcdd")); // Output: "c"
console.log(findFirstNonRepeatingCharacter("aabbcc")); // Output: null (no non-repeating characters)
