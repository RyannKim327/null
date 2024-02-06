function findFirstNonRepeatingChar(input) {
  // Create an empty object to store character counts
  const charCount = {};

  // Iterate over each character of the string
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // If the character is seen for the first time, initialize its count to 1
    if (!charCount[char]) {
      charCount[char] = 1;
    }
    // Otherwise, increment the count
    else {
      charCount[char]++;
    }
  }

  // Find the first character with count equal to 1
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (charCount[char] === 1) {
      return char;
    }
  }

  // If there is no non-repeating character, return null
  return null;
}

// Example usage:
const inputString = "aabccd";
const firstNonRepeatingChar = findFirstNonRepeatingChar(inputString);
console.log(firstNonRepeatingChar); // Output: "b"
