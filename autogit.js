function findFirstRepeatedChar(str) {
  let charMap = {};
  
  for (let char of str) {
    if (charMap[char]) {
      return char;
    } else {
      charMap[char] = true;
    }
  }
  
  return null;
}

// Example usage
const str = "hello world";
const firstRepeatedChar = findFirstRepeatedChar(str);

if (firstRepeatedChar) {
  console.log(`The first repeated character in "${str}" is: ${firstRepeatedChar}`);
} else {
  console.log("No repeated characters found in the string");
}
