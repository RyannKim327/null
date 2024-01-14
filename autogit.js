function findFirstRepeatedChar(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return char;
    }
    charCount[char] = 1;
  }
  return null; // return null if no repeated character is found
}

const inputString = "Hello World";
const firstRepeatedChar = findFirstRepeatedChar(inputString);
console.log("First Repeated Character:", firstRepeatedChar);
