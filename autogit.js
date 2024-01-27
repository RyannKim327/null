function calculateHash(str, prime) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * (prime ** i);
  }
  return hash;
}
function recalculateHash(oldHash, oldChar, newChar, prime, windowSize) {
  const newHash = oldHash - (oldChar.charCodeAt(0) * (prime ** (windowSize - 1)));
  return newHash * prime + newChar.charCodeAt(0);
}
function rabinKarp(pattern, text) {
  const prime = 101;   // Prime number as the base for the hash function
  const windowSize = pattern.length;
  const patternHash = calculateHash(pattern, prime);
  let windowHash = calculateHash(text.slice(0, windowSize), prime);

  for (let i = 0; i < text.length - windowSize + 1; i++) {
    if (windowHash === patternHash && text.slice(i, i + windowSize) === pattern) {
      return i;   // Match found at index i
    }

    const oldChar = text[i];
    const newChar = text[i + windowSize];
    windowHash = recalculateHash(windowHash, oldChar, newChar, prime, windowSize);
  }

  return -1;   // No match found
}
const text = "Hello, world!";
const pattern = "world";
const index = rabinKarp(pattern, text);

console.log(index);  // Output: 7
