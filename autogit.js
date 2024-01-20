function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  let charFreq = {};

  // Iterate through each character in the string
  for (let char of str) {
    // If the character is not in the object, add it as a key with a value of 1
    // Otherwise, increment its value in the object
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
  }

  // Iterate through the string again
  for (let char of str) {
    // If the character's frequency is 1, return it
    if (charFreq[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null or an appropriate value
  return null;
}

// Example usage
let str = "aabbcde";
let firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: "c"
