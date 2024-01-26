function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const prime = 101; // A prime number to calculate the hash value

  // Calculate the hash value for a given string
  function calculateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
  }

  // Recalculate the hash by removing the leftmost character and adding the rightmost character
  function recalculateHash(oldHash, oldChar, newChar, patternLength) {
    let newHash = oldHash - oldChar.charCodeAt(0);
    newHash = Math.floor(newHash / prime);
    newHash += newChar.charCodeAt(0) * Math.pow(prime, patternLength - 1);
    return newHash;
  }

  const patternHash = calculateHash(pattern); // Calculate the hash of the pattern
  let currentHash = calculateHash(text.substring(0, patternLength)); // Calculate the hash of the first window

  // Check if the hash values match and perform character-by-character comparison to avoid false positives
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (currentHash === patternHash && text.substring(i, i + patternLength) === pattern) {
      return i; // Match found, return the starting index of the pattern
    }
    const oldChar = text[i];
    const newChar = text[i + patternLength];
    currentHash = recalculateHash(currentHash, oldChar, newChar, patternLength);
  }

  return -1; // No match found
}

// Example Usage
const text = "Lorem ipsum dolor sit amet";
const pattern = "dolor";

console.log(rabinKarpSearch(text, pattern)); // Output: 12 (index of the starting position of the pattern)
