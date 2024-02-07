function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character counts
  const charCounts = {};

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Increment the count for the current character
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Iterate through each character again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the current character has a count of 1
    if (charCounts[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  return null; // If no non-repeating character is found
}

// Usage example
const string = "abacddbec";
const firstNonRepeatingChar = findFirstNonRepeatingChar(string);
console.log(firstNonRepeatingChar); // Output: "e"
