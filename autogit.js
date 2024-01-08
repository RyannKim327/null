function rabinKarp(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength > textLength) {
    return -1; // Pattern is longer than the text
  }

  const prime = 101; // A prime number to reduce collisions

  // Hash function
  function hash(str) {
    let hashValue = 0;
    for (let i = 0; i < str.length; i++) {
      hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
  }

  // Calculate pattern and initial text hash
  const patternHash = hash(pattern);
  let textHash = hash(text.substring(0, patternLength));

  // Iterate through the text
  for (let i = 0; i <= textLength - patternLength; i++) {
    // Check if the hash values match
    if (patternHash === textHash) {
      let found = true;
      // Check character by character
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Match found at index i
      }
    }
    // Calculate the hash for the next window in the text
    textHash =
      (textHash - text.charCodeAt(i) + text.charCodeAt(i + patternLength)) *
      prime;
  }

  return -1; // Pattern not found in the text
}

// Test the function
const text = "ABABCABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = rabinKarp(text, pattern);
console.log("Pattern found at index:", result);
