function findFirstRepeatedChar(str) {
  const charMap = new Map();

  for (let char of str) {
    if (charMap.has(char)) {
      return char;
    }
    charMap.set(char, true);
  }

  return null; // Return null if no repeated character is found
}

const inputString = "hello world";
const firstRepeatedChar = findFirstRepeatedChar(inputString);
console.log(firstRepeatedChar); // Output: "l"
