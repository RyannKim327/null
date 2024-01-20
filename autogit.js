function findFirstRepeatedChar(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      return char; // Found the first repeated character
    } else {
      charMap[char] = 1;
    }
  }

  return null; // No repeated character found
}

// Example usage
const str = "Hello, World!";
const repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
  console.log(`The first repeated character in '${str}' is '${repeatedChar}'.`);
} else {
  console.log(`No repeated character found in '${str}'.`);
}
