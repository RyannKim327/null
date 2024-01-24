function findFirstNonRepeatingChar(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  return null; // or any appropriate message
}

// Example usage:
console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: "c"
console.log(findFirstNonRepeatingChar("aabbccd")); // Output: "d"
console.log(findFirstNonRepeatingChar("aabbccdd")); // Output: null
