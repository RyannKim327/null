function calculateHash(str, prime) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
}
function searchRabinKarp(text, pattern) {
  const prime = 101;  // Choose a prime number. It affects the hash calculation.
  const patternHash = calculateHash(pattern, prime);
  let textHash = calculateHash(text.substr(0, pattern.length), prime);

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (textHash === patternHash) {
      let found = true;
      for (let j = 0; j < pattern.length; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
    // Recalculate the rolling hash for the next substring in the text.
    textHash =
      (textHash - text.charCodeAt(i)) / prime +
      text.charCodeAt(i + pattern.length) * Math.pow(prime, pattern.length - 1);
  }
  return -1; // Pattern not found
}
// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "adipiscing";

const index = searchRabinKarp(text, pattern);
if (index !== -1) {
  console.log(`Pattern found at index ${index}`);
} else {
  console.log("Pattern not found in the text");
}
