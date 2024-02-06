function findFirstNonRepeatingCharacter(str) {
  // Create an empty object to store character counts
  const charCounts = {};

  // Iterate over the string and count each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === undefined) {
      charCounts[char] = 1;
    } else {
      charCounts[char]++;
    }
  }

  // Find the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }

  // If no such character is found, return null
  return null;
}

// Example usage
const str = "abacddbec";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: 'e'
