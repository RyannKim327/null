function findFirstNonRepeatingCharacter(string) {
  // Create an empty object to store character counts
  const charCount = {};

  // Iterate over each character in the string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // Increment the count of the current character in the charCount object
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Iterate over each character in the string again
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // If the count of the current character is 1, it is the first non-repeating character
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Example usage
const inputString = "abracadabra";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar); // Output: "b"
