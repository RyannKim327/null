function findFirstNonRepeatingChar(str) {
  const charFreq = {};

  // Loop through the string and increment character counts
  for (let char of str) {
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
  }

  // Loop through the string again and find the first character with a count of 1
  for (let char of str) {
    if (charFreq[char] === 1) {
      return char;
    }
  }

  // Return null if there are no non-repeating characters
  return null;
}

// Example usage
const string = "abacabad";
const firstNonRepeatingChar = findFirstNonRepeatingChar(string);
console.log("First non-repeating character:", firstNonRepeatingChar);
