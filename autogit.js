function findFirstRepeatedChar(str) {
  const hashmap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (hashmap[char]) {
      return char;
    }

    hashmap[char] = true;
  }

  return null; // No repeated character found
}

// Example usage
const str = "Hello";
const repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: "l"
