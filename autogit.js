function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character occurrences
  const charOccurrences = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is already in the object, increment its count
    // Otherwise, initialize its count to 1
    charOccurrences[char] = charOccurrences[char] ? charOccurrences[char] + 1 : 1;
  }

  // Find the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charOccurrences[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const input = "abracadabra";
const result = findFirstNonRepeatingChar(input);
console.log("First non-repeating character:", result);  // Output: "b"
