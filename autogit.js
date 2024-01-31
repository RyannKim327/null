function findFirstRepeatedCharacter(str) {
  // Create an empty set to store seen characters
  let seen = new Set();

  // Iterate through each character in the string
  for (let char of str) {
    // If the character is already in the set, return it
    if (seen.has(char)) {
      return char;
    }
    // Otherwise, add it to the set
    seen.add(char);
  }

  // If no repeated character is found, return null
  return null;
}

// Example usage
let input = "programming";
let result = findFirstRepeatedCharacter(input);
console.log(result); // Output: "r"
