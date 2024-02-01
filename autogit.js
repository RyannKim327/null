function rabinKarp(text, pattern) {
  const prime = 31; // Prime number to calculate hash
  const patternHash = hash(pattern); // Hash value of the pattern
  const patternLength = pattern.length;
  const textLength = text.length;

  // Helper function to calculate hash value
  function hash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
      hashValue = (hashValue * prime + str.charCodeAt(i)) % patternLength;
    }
    return hashValue;
  }

  // Calculate initial rolling hash value for the first patternLength characters of the text
  let rollingHash = hash(text.substring(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    // Check if the rolling hash value matches the pattern's hash value
    if (rollingHash === patternHash) {
      // Perform character-by-character comparison to avoid false positives
      let j = 0;
      while (j < patternLength && text.charAt(i + j) === pattern.charAt(j)) {
        j++;
      }
      if (j === patternLength) {
        return i; // Match found, return the starting index
      }
    }

    // Calculate the rolling hash value for the next window
    let prevCharHash = text.charCodeAt(i) * Math.pow(prime, patternLength - 1);
    rollingHash = ((rollingHash - prevCharHash) * prime + text.charCodeAt(i + patternLength)) % patternLength;
    rollingHash = (rollingHash + patternLength) % patternLength; // To handle negative hash values
  }

  return -1; // Match not found
}

// Example usage:
const text = "abcdeabc";
const pattern = "abc";
const matchIndex = rabinKarp(text, pattern);

if (matchIndex !== -1) {
  console.log(`Pattern found at index ${matchIndex}`);
} else {
  console.log("Pattern not found");
}
