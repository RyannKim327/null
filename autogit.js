function findFirstNonRepeatingChar(str) {
  // Create a counter object to store character count
  const counter = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Increment the counter for the current character
    counter[char] = (counter[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (counter[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character found
  return null;
}

// Example usage
const str = "aabbcde";
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
