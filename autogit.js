function calculateHash(str, start, end, prime) {
  let hash = 0;
  for (let i = start; i < end; i++) {
    hash = (hash * prime + str.charCodeAt(i)) % prime;
  }
  return hash;
}
function rabinKarpSearch(text, pattern) {
  const prime = 101; // a prime number used for hashing
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = calculateHash(pattern, 0, patternLength, prime);
  let textHash = calculateHash(text, 0, patternLength, prime);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (textHash === patternHash) {
      // If the hash values match, perform a character-by-character comparison
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // pattern found at position i
      }
    }
    // Calculate the rolling hash for the next substring
    textHash =
      (textHash - text.charCodeAt(i) + text.charCodeAt(i + patternLength)) %
      prime;

    // Ensure the hash is positive
    if (textHash < 0) {
      textHash += prime;
    }
  }
  return -1; // pattern not found
}
const text = "Hello, world!";
const pattern = "world";
const result = rabinKarpSearch(text, pattern);

if (result !== -1) {
  console.log(`Pattern found starting at position ${result}`);
} else {
  console.log("Pattern not found");
}
