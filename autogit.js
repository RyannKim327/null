function findFirstNonRepeatingChar(str) {
  // Create an empty frequency count object
  const frequencyCount = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Increment the frequency count of the character
    frequencyCount[char] = (frequencyCount[char] || 0) + 1;
  }

  // Iterate through the frequency count
  for (const char in frequencyCount) {
    // Return the first character with a frequency of one
    if (frequencyCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character is found
  return null;
}

// Example usage
const str = "abacabad"; // Expected output: 'c'
console.log(findFirstNonRepeatingChar(str));
