function calculateHash(str, prime, base) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str[i].charCodeAt(0) * Math.pow(base, i);
    hash %= prime;
  }
  return hash;
}
function recalculateHash(str, oldHash, oldChar, newChar, base, prime) {
  let newHash = oldHash - oldChar * Math.pow(base, str.length - 1);
  newHash *= base;
  newHash += newChar;
  newHash %= prime;
  if (newHash < 0) {
    newHash += prime;
  }
  return newHash;
}
function rabinKarp(text, pattern) {
  const BASE = 26;
  const PRIME = 997;

  const n = text.length;
  const m = pattern.length;
  const patternHash = calculateHash(pattern, PRIME, BASE);
  let textHash = calculateHash(text.substring(0, m), PRIME, BASE);

  for (let i = 0; i <= n - m; i++) {
    if (textHash === patternHash && text.substring(i, i + m) === pattern) {
      return i; // Pattern found at index i
    }
    if (i < n - m) {
      const oldChar = text.charCodeAt(i);
      const newChar = text.charCodeAt(i + m);
      textHash = recalculateHash(text, textHash, oldChar, newChar, BASE, PRIME);
    }
  }

  return -1; // Pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "ipsum";

const index = rabinKarp(text, pattern);
console.log(index); // Output: 6
