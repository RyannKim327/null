function rabinKarpSearch(text, pattern) {
  const prime = 101;  // A prime number to serve as the base for hash computation
  const n = text.length;
  const m = pattern.length;
  const patternHash = hash(pattern, m);  // Compute the hash value of the pattern

  let textHash = hash(text, m);  // Compute the initial hash value for the first window
  for (let i = 0; i <= n - m; i++) {
    if (textHash === patternHash && text.substring(i, i + m) === pattern) {
      return i;  // Match found, return the starting index
    }
    if (i < n - m) {
      textHash = rehash(text, i, i + m, textHash, m, prime);
    }
  }
  return -1;  // No match found
}

// Compute the hash value for a given string
function hash(str, len) {
  let hashValue = 0;
  for (let i = 0; i < len; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, len - i - 1);
  }
  return hashValue;
}

// Recompute the hash value for the next window
function rehash(str, oldIndex, newIndex, oldHash, len, prime) {
  let newHash = oldHash - str.charCodeAt(oldIndex);
  newHash = Math.floor(newHash / prime);
  newHash += str.charCodeAt(newIndex) * Math.pow(prime, len - 1);
  return newHash;
}

// Example usage
const text = "AABAACAADAABAABA";
const pattern = "AABA";
const index = rabinKarpSearch(text, pattern);
console.log("Pattern found at index:", index);
