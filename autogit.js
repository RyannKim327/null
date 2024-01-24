function calculateHash(str, prime, mod) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * prime + str.charCodeAt(i)) % mod;
  }
  return hash;
}
function rabinKarp(pattern, text) {
  const prime = 31; // a prime number that helps reduce collisions
  const mod = 100000007; // a large prime number to avoid overflow

  const patternLength = pattern.length;
  const textLength = text.length;
  const patternHash = calculateHash(pattern, prime, mod);
  let textHash = calculateHash(text.substring(0, patternLength), prime, mod);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) { // hash match, now compare strings
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (pattern.charAt(j) !== text.charAt(i + j)) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // pattern found at index i
      }
    }
    if (i < textLength - patternLength) { // update the rolling hash
      textHash = (textHash - text.charCodeAt(i) * prime ** (patternLength - 1)) % mod;
      textHash = (textHash * prime + text.charCodeAt(i + patternLength)) % mod;
      if (textHash < 0) { // make sure the hash is positive
        textHash += mod;
      }
    }
  }

  return -1; // pattern not found
}
const text = "Hello, world!";
const pattern = "world";
const index = rabinKarp(pattern, text);

if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found");
}
