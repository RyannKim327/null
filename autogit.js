function findFirstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null; // return null if there are no non-repeating characters
}

// Example usage
let string = "abracadabra";
let firstNonRepeatingChar = findFirstNonRepeatingCharacter(string);
console.log(firstNonRepeatingChar); // Output: "b"
