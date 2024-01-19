function rabinKarpSearch(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;
  const primeNumber = 101; // Choosing a prime number for hash calculation

  // Calculate hash values for pattern and first substring in the text
  let patternHash = 0;
  let textHash = 0;
  let multiplier = 1;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i) * multiplier;
    textHash += text.charCodeAt(i) * multiplier;
    multiplier *= primeNumber;
  }

  // Iterate through the text with rolling hash search
  for (let i = 0; i <= textLength - patternLength; i++) {
    // Check if hash values match
    if (patternHash === textHash) {
      // Double-check by comparing characters
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i; // Match found, return the starting index
      }
    }

    // Update the hash value for the next substring
    textHash =
      (textHash - text.charCodeAt(i) * multiplier) * primeNumber +
      text.charCodeAt(i + patternLength);
  }

  return -1; // Pattern not found
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = rabinKarpSearch(pattern, text);

console.log(`Pattern found at index ${index}`);
