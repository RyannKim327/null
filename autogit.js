function rabinKarp(text, pattern) {
  const prime = 101; // prime number for hashing
  const textLen = text.length;
  const patternLen = pattern.length;
  const patternHash = calculateHash(pattern, patternLen);

  let textHash = calculateHash(text, patternLen);
  
  for (let i = 0; i <= textLen - patternLen; i++) {
    // Check if hash values match
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < patternLen; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      
      if (found) {
        return i; // Found a match, returning the index
      }
    }

    // Recalculate hash for the next substring
    if (i < textLen - patternLen) {
      textHash = recalculateHash(textHash, text, i, patternLen, prime);
    }
  }
  
  return -1; // No match found
}

// Helper function to calculate hash value using a rolling hash function
function calculateHash(str, len) {
  let hash = 0;
  for (let i = 0; i < len; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
}

// Helper function to recalculate hash value for the next substring
function recalculateHash(prevHash, str, prevIndex, patternLen, prime) {
  let hash = prevHash - str.charCodeAt(prevIndex);
  hash = hash / prime + str.charCodeAt(prevIndex + patternLen) * Math.pow(prime, patternLen - 1);
  return hash;
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = rabinKarp(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
