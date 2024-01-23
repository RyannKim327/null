function rabinKarpSearch(pattern, text) {
  const prime = 101; // prime number as the base value
  const patternLength = pattern.length;
  const textLength = text.length;

  // Calculate the hash value of the pattern
  let patternHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i) * Math.pow(prime, i);
  }

  // Calculate the hash value of each possible substring
  let substringHash = 0;
  for (let i = 0; i < textLength - patternLength + 1; i++) {
    substringHash = 0;
    for (let j = 0; j < patternLength; j++) {
      substringHash += text.charCodeAt(i + j) * Math.pow(prime, j);
    }

    // Compare the hash values
    if (substringHash === patternHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }

      if (found) {
        return i; // Return the starting index of the pattern in the text
      }
    }
  }

  return -1; // Pattern not found
}

// Example usage
const text = 'Hello, world!';
const pattern = 'world';
const index = rabinKarpSearch(pattern, text);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log('Pattern not found');
}
