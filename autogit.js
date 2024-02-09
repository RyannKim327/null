function rabinKarp(text, pattern) {
  const prime = 101; // a prime number to calculate the hash
  const patternLength = pattern.length;
  const textLength = text.length;

  // Calculate the hash value of a string
  function calculateHash(str, length) {
    let hash = 0;
    for (let i = 0; i < length; i++) {
      hash += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
  }

  // Recalculate the hash value of a substring by subtracting the ASCII value of the removed character and adding the ASCII value of the new character
  function recalculateHash(oldHash, oldChar, newChar, length) {
    let newHash = oldHash - oldChar.charCodeAt(0);
    newHash = newHash / prime;
    newHash += newChar.charCodeAt(0) * Math.pow(prime, length - 1);
    return newHash;
  }

  const patternHash = calculateHash(pattern, patternLength);
  let textHash = calculateHash(text, patternLength);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // pattern found at index i
      }
    }
    // Move the window by one position and recalculate the hash value of the new substring
    if (i < textLength - patternLength) {
      textHash = recalculateHash(textHash, text[i], text[i + patternLength], patternLength);
    }
  }

  return -1; // pattern not found
}

// Example usage
const text = "ABCABABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = rabinKarp(text, pattern);
console.log(index); // Output: 11
