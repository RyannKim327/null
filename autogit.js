function rabinKarp(text, pattern) {
  const base = 3; // Choose a base value, often a prime number
  const patternHash = calculateHash(pattern, base);
  const patternLength = pattern.length;
  const textLength = text.length;

  let windowHash = calculateHash(text.slice(0, patternLength), base);

  // Slide the window over the text
  for (let i = 0; i <= textLength - patternLength; i++) {
    // Check if the hash values match, then verify character by character
    if (windowHash === patternHash && text.slice(i, i + patternLength) === pattern)
      return i; // Match found at position i

    // Recalculate the hash value for the next window
    windowHash = calculateNextHash(windowHash, text.charCodeAt(i), text.charCodeAt(i + patternLength), base, patternLength);
  }

  return -1; // No match found
}

function calculateHash(str, base) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(base, i);
  }
  return hash;
}

function calculateNextHash(currentHash, prevCharAscii, nextCharAscii, base, patternLength) {
  const nextHash = (currentHash - (prevCharAscii * Math.pow(base, 0))) / base;
  return nextHash + (nextCharAscii * Math.pow(base, patternLength - 1));
}

// Example usage:
const inputString = "ABABDABACDABABCABAB";
const patternString = "ABABCABAB";
const matchIndex = rabinKarp(inputString, patternString);
console.log(matchIndex); // Output: 10 (index position of the first occurrence of the pattern)
