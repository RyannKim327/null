function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ''; // If the array is empty, return an empty string
  }

  // Find the minimum string length in the array
  let minLength = Infinity;
  for (let i = 0; i < strings.length; i++) {
    minLength = Math.min(minLength, strings[i].length);
  }

  // Iterate from index 0 to minLength - 1
  let prefix = '';
  for (let i = 0; i < minLength; i++) {
    const char = strings[0][i]; // Consider the character at index i in the first string

    // Check if the character is common in all strings
    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char) {
        return prefix; // If a character doesn't match, return the current prefix
      }
    }

    prefix += char; // If the character matches, append it to the prefix
  }

  return prefix; // Return the longest common prefix
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
