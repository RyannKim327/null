function rabinKarpSearch(pattern, text) {
  // ...
}
  if (pattern.length === 0 || text.length === 0) {
    return -1;
  }
  const patternLength = pattern.length;
  const textLength = text.length;
  const prime1 = 3; // First prime number
  const prime2 = 5; // Second prime number
  let patternHash = 0;
  let windowHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i) * Math.pow(prime1, patternLength - i - 1);
    windowHash += text.charCodeAt(i) * Math.pow(prime1, patternLength - i - 1);
  }
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === windowHash) {
      let patternFound = true;

      // Verify characters one by one
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          patternFound = false;
          break;
        }
      }

      if (patternFound) {
        return i; // Return the starting index of the pattern in the text
      }
    }

    // Calculate the next window's hash value
    // Remove the leftmost character from the hash and add the rightmost character
    if (i < textLength - patternLength) {
      windowHash = (windowHash - text.charCodeAt(i) * Math.pow(prime1, patternLength - 1)) * prime1 + text.charCodeAt(i + patternLength);
    }
  }

  return -1; // Pattern not found
function rabinKarpSearch(pattern, text) {
  if (pattern.length === 0 || text.length === 0) {
    return -1;
  }

  const patternLength = pattern.length;
  const textLength = text.length;
  const prime1 = 3;
  const prime2 = 5;

  let patternHash = 0;
  let windowHash = 0;

  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i) * Math.pow(prime1, patternLength - i - 1);
    windowHash += text.charCodeAt(i) * Math.pow(prime1, patternLength - i - 1);
  }

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === windowHash) {
      let patternFound = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          patternFound = false;
          break;
        }
      }
      if (patternFound) {
        return i;
      }
    }
    if (i < textLength - patternLength) {
      windowHash = (windowHash - text.charCodeAt(i) * Math.pow(prime1, patternLength - 1)) * prime1 + text.charCodeAt(i + patternLength);
    }
  }

  return -1;
}
const text = 'The quick brown fox jumps over the lazy dog';
const pattern = 'brown';
const matchIndex = rabinKarpSearch(pattern, text);

console.log(matchIndex); // Output: 10
