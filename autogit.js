function calculateHash(str, start, end) {
  let hash = 0;
  const prime = 31; // You can choose any prime number
  const mod = 1e9 + 9; // Choose a large prime number to avoid collisions
  
  for (let i = start; i <= end; i++) {
    hash = (hash * prime + str.charCodeAt(i)) % mod;
  }
  
  return hash;
}
function rabinKarpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const patternHash = calculateHash(pattern, 0, m - 1);
  let textHash = calculateHash(text, 0, m - 1);
  
  for (let i = 0; i <= n - m; i++) {
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < m; j++) {
        if (pattern[j] !== text[i + j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Pattern found at index i
      }
    }
    if (i < n - m) {
      // Recalculate the rolling hash for the next substring
      textHash = (textHash - text.charCodeAt(i) + text.charCodeAt(i + m)) % mod;
      if (textHash < 0) {
        textHash += mod;
      }
    }
  }
  
  return -1; // Pattern not found
}
const text = 'This is a sample text for testing.';
const pattern = 'sample';

const index = rabinKarpSearch(text, pattern);

if (index !== -1) {
  console.log(`Pattern found at index ${index}.`);
} else {
  console.log('Pattern not found.');
}
