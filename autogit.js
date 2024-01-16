function rabinKarp(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  // Calculate pattern hash
  let patternHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i);
  }

  // Calculate initial window hash
  let windowHash = 0;
  for (let i = 0; i < patternLength; i++) {
    windowHash += text.charCodeAt(i);
  }

  // Iterate through text
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (windowHash === patternHash) {
      // Check for match
      if (text.substring(i, i + patternLength) === pattern) {
        return i; // Match found, return starting position
      }
    }

    // Calculate hash for next window
    windowHash -= text.charCodeAt(i);
    windowHash += text.charCodeAt(i + patternLength);
  }

  return -1; // No match found
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "ipsum";
const result = rabinKarp(text, pattern);
console.log(result); // Output: 6 (starting index of the pattern in the text)
