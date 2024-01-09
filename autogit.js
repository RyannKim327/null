function findFirstNonRepeatingCharacter(inputString) {
  const charCount = {};

  for (let char of inputString.split('')) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char of inputString.split('')) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// Example usage
const string = 'aabbcdeff';
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(string);
console.log(firstNonRepeatingChar); // Output: 'c'
