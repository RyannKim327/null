function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// Example usage
const inputString = "abbcdeff";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar); // Output: 'a'
