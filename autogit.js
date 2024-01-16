function rabinKarpSearch(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;
  const prime = 101; // A prime number for hashing

  // Compute the hash value of the pattern and first window of the text
  let patternHash = 0;
  let textHash = 0;
  let power = 1;
  for (let i = 0; i < patternLength; i++) {
    patternHash = (patternHash + pattern.charCodeAt(i) * power) % prime;
    textHash = (textHash + text.charCodeAt(i) * power) % prime;
    power = (power * 31) % prime; // 31 is chosen as the base
  }

  // Slide the pattern over the text one by one and compare hash values
  for (let i = 0; i <= textLength - patternLength; i++) {
    // If hash values match, compare the characters
    if (patternHash === textHash) {
      let j;
      for (j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j])
          break;
      }

      if (j === patternLength)
        return i; // Match found at index i
    }

    // Recalculate the hash value for the next window
    if (i < textLength - patternLength) {
      textHash = (prime * (textHash - text.charCodeAt(i) * power) + text.charCodeAt(i + patternLength)) % prime;
      if (textHash < 0)
        textHash += prime;
    }
  }

  return -1; // No match found
}

// Example usage:
const text = "This is a test search string.";
const pattern = "test";
const index = rabinKarpSearch(pattern, text);
console.log("Pattern found at index:", index);
