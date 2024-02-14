function findFirstRepeatedCharacter(str) {
  let frequencies = {};
  
  for (let char of str) {
    if (frequencies[char]) {
      return char; // Return the first repeated character
    } else {
      frequencies[char] = true;
    }
  }
  
  return null; // No repeated characters found
}

// Example usage
let inputString = "Hello World!";
let firstRepeatedChar = findFirstRepeatedCharacter(inputString);

console.log(firstRepeatedChar);
