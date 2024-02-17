function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const prime = 101; // A prime number to calculate the hash value
  const base = 256; // The base for the hash function

  // Calculate the initial hash values for the pattern and the first window of the text
  let hashPattern = 0;
  let hashWindow = 0;
  let basePower = 1;
  for (let i = 0; i < patternLength; i++) {
    hashPattern = (hashPattern * base + pattern.charCodeAt(i)) % prime;
    hashWindow = (hashWindow * base + text.charCodeAt(i)) % prime;
    if (i > 0) {
      basePower = (basePower * base) % prime;
    }
  }

  // Slide the window one character at a time and compare hash values
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (hashPattern === hashWindow) {
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i; // Match found
      }
    }
    // Recalculate the hash value for the new window
    if (i < textLength - patternLength) {
      hashWindow = (((hashWindow - text.charCodeAt(i) * basePower) * base + text.charCodeAt(i + patternLength)) % prime + prime) % prime;
    }
  }
  return -1; // No match found
}

// Test the implementation
const text = 'abracadabra';
const pattern = 'cad';
const index = rabinKarpSearch(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
