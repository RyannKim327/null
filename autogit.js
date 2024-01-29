function rabinKarp(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const prime = 101; // A prime number for hash calculation
  const primePower = Math.pow(prime, patternLength - 1);

  // Calculate the hash value of the pattern and the first window of the text
  let patternHash = 0;
  let currentWindowHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i) * Math.pow(prime, i);
    currentWindowHash += text.charCodeAt(i) * Math.pow(prime, i);
  }

  for (let i = 0; i <= textLength - patternLength; i++) {
    // If the hash values of the current window and the pattern match,
    // compare the characters of the current window and the pattern
    if (currentWindowHash === patternHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i+j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Pattern found at position i
      }
    }

    // Calculate the hash value for the next window
    // Remove the hash contribution of the first character from the current window
    // Add the hash contribution of the next character to the current window
    if (i < textLength - patternLength) {
      currentWindowHash = (currentWindowHash - text.charCodeAt(i) * primePower) * prime + text.charCodeAt(i + patternLength);
    }
  }

  return -1; // Pattern not found
}

// Example usage
const text = "AABAACAADAABAABA";
const pattern = "AABA";
const index = rabinKarp(text, pattern);
if (index >= 0) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
