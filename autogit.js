function findFirstRepeatedChar(str) {
  const hashTable = {};

  for (let char of str) {
    if (hashTable[char]) {
      return char;
    } else {
      hashTable[char] = true;
    }
  }

  return null; // No repeated character found
}

// Example usage:
const str = "abcdeff";
const result = findFirstRepeatedChar(str);
console.log(result); // Output: 'f'
