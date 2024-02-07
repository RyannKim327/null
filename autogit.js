function findFirstNonRepeatingCharacter(str) {
  // Step 2: Create object to store character counts
  let charCount = {};

  // Step 3: Count characters
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 4: Find first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Step 5: Return null if no non-repeating character found
  return null;
}

// Example usage
let str = "aabcbd";
let firstNonRepeatingChar = findFirstNonRepeatingCharacter(str);
console.log(firstNonRepeatingChar); // Output: "c"
