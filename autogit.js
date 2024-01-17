function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const prime = 101; // A prime number to calculate the hash

  function calculateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
  }

  function reCalculateHash(oldHash, oldChar, newChar, patternLength) {
    let newHash = oldHash - oldChar.charCodeAt(0);
    newHash /= prime;
    newHash += newChar.charCodeAt(0) * Math.pow(prime, patternLength - 1);
    return newHash;
  }

  const patternHash = calculateHash(pattern);
  let windowHash = calculateHash(text.slice(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === windowHash) {
      let window = text.slice(i, i + patternLength);
      if (window === pattern) {
        return i; // Return the starting index of the pattern in the text
      }
    }
    if (i < textLength - patternLength) {
      windowHash = reCalculateHash(
        windowHash,
        text[i].charCodeAt(0),
        text[i + patternLength].charCodeAt(0),
        patternLength
      );
    }
  }

  return -1; // Return -1 if pattern not found
}

// Example usage:
const text = "Hello, World!";
const pattern = "World";

const index = rabinKarpSearch(text, pattern);
if (index === -1) {
  console.log("Pattern not found");
} else {
  console.log(`Pattern found at index ${index}`);
}
