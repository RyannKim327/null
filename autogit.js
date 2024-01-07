function findFirstRepeatedChar(str) {
  const chars = str.split('');
  const frequency = {};
  
  for (let char of chars) {
    if (frequency[char]) {
      return char;
    } else {
      frequency[char] = 1;
    }
  }
  
  return null;
}

// Example usage:
console.log(findFirstRepeatedChar("hello"));  // Output: "l"
console.log(findFirstRepeatedChar("JavaScript"));  // Output: "a"
console.log(findFirstRepeatedChar("Stack Overflow"));  // Output: " " (whitespace)
console.log(findFirstRepeatedChar("abcdefg"));  // Output: null (no repeated characters)
