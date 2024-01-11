function findFirstRepeatedChar(str) {
  // Create an empty object to store characters and their frequencies
  let charMap = {};

  // Convert the string to an array to iterate over each character
  let charArray = [...str];

  // Loop through each character
  for (let char of charArray) {
    // If the character is already in the charMap, it is repeated
    if (charMap[char]) {
      return char;
    }

    // If the character is not in the charMap, add it with a frequency of 1
    charMap[char] = 1;
  }

  // If no repeated character is found, return null
  return null;
}

// Testing the function
console.log(findFirstRepeatedChar("hello")); // Output: l
console.log(findFirstRepeatedChar("world")); // Output: null
console.log(findFirstRepeatedChar("javascript")); // Output: a
