function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeating character found, return null or any other value you prefer
  return null;
}

// Example usage
const str = "aabbcddxyz";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
