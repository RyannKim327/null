function findFirstRepeatedChar(str) {
  const charCount = {};
  
  for (const char of str) {
    if (charCount[char]) {
      return char;
    }
    charCount[char] = true;
  }
  
  return null;
}

const inputString = "Hello World";
const result = findFirstRepeatedChar(inputString);
console.log(result); // Output: 'l'
function findFirstRepeatedChar(str) {
  const charArray = Array.from(str);
  const visitedChars = [];
  
  for (const char of charArray) {
    if (visitedChars.includes(char)) {
      return char;
    }
    visitedChars.push(char);
  }
  
  return null;
}

const inputString = "Hello World";
const result = findFirstRepeatedChar(inputString);
console.log(result); // Output: 'l'
function findFirstRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return char;
    }
  }
  
  return null;
}

const inputString = "Hello World";
const result = findFirstRepeatedChar(inputString);
console.log(result); // Output: 'l'
