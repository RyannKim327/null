function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  // Find the minimum length string in the array
  const minLength = Math.min(...strs.map(str => str.length));
  
  // Iterate over the characters of the minimum length string
  for (let i = 0; i < minLength; i++) {
    // Get the character at index i of the first string
    const char = strs[0][i];
    
    // Check if the character exists in the same position of all the strings
    if (!strs.every(str => str[i] === char)) {
      // If not, return the prefix until the mismatched character
      return strs[0].substring(0, i);
    }
  }
  
  // If all characters match, return the minimum length string
  return strs[0].substring(0, minLength);
}

// Usage example:
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'fl'
