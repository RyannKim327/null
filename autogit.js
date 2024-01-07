function findFirstNonRepeatingCharacter(str) {
  // Create an object to store character frequencies
  const charCounts = {};

  // Count the frequencies of each character
  for (let char of str) {
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // Return null if there is no non-repeating character
  return null;
}

// Example usage
const input = "aabbcdeff";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(input);
console.log(firstNonRepeatingChar); // Output: "c"
