function rabinKarpSearch(text, pattern) {
  const prime = 101; // A prime number to avoid collisions
  const textSize = text.length;
  const patternSize = pattern.length;
  const patternHash = hash(pattern); // Compute the hash value of the pattern
  let windowHash = hash(text.slice(0, patternSize)); // Compute the initial window hash

  // Slide the window over the text and compare hash values
  for (let i = 0; i <= textSize - patternSize; i++) {
    if (windowHash === patternHash && text.slice(i, i + patternSize) === pattern) {
      return i; // Match found at index i
    }
    // Recompute the hash value for the next window
    windowHash = rehash(text, i, i + patternSize, windowHash, patternSize, prime);
  }

  return -1; // Match not found
}

// Compute the hash value for a given string
function hash(str) {
  let hashValue = 0;
  const strSize = str.length;

  for (let i = 0; i < strSize; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, strSize - i - 1);
  }

  return hashValue;
}

// Compute the hash value for the next window by removing the trailing character hash and adding the leading character hash
function rehash(str, oldIndex, newIndex, oldHash, patternSize, prime) {
  const newHash = oldHash - str.charCodeAt(oldIndex);
  newHash /= prime;
  newHash += str.charCodeAt(newIndex) * Math.pow(prime, patternSize - 1);
  return newHash;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
  console.log("Pattern found at index:", index);
} else {
  console.log("Pattern not found.");
}
