function findFirstRepeatedCharacter(str) {
  // Create a map to store character occurrences
  const charMap = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is already in the map, it's a repeat
    if (charMap[char]) {
      return char; // Return the repeated character
    }
    
    // Store the occurrence of the character in the map
    charMap[char] = true;
  }

  return null; // No repeated character found
}

// Example usage
const input = "abbcdeff";
const firstRepeatedChar = findFirstRepeatedCharacter(input);
console.log(firstRepeatedChar); // Output: "b"
