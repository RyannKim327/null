function rabinKarpSearch(text, pattern) {
  // ...
}
function rabinKarpSearch(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }
  // ...
}
function rabinKarpSearch(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const prime = 101; // prime number for hashing
  const textSize = text.length;
  const patternSize = pattern.length;
  let textHash = 0;
  let patternHash = 0;
  // ...
}
function rabinKarpSearch(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const prime = 101; // prime number for hashing
  const textSize = text.length;
  const patternSize = pattern.length;
  let textHash = 0;
  let patternHash = 0;

  // Calculate initial hash values
  for (let i = 0; i < patternSize; i++) {
    textHash += text.charCodeAt(i) * Math.pow(prime, patternSize - i - 1);
    patternHash += pattern.charCodeAt(i) * Math.pow(prime, patternSize - i - 1);
  }
  // ...
}
function rabinKarpSearch(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const prime = 101; // prime number for hashing
  const textSize = text.length;
  const patternSize = pattern.length;
  let textHash = 0;
  let patternHash = 0;

  // Calculate initial hash values
  for (let i = 0; i < patternSize; i++) {
    textHash += text.charCodeAt(i) * Math.pow(prime, patternSize - i - 1);
    patternHash += pattern.charCodeAt(i) * Math.pow(prime, patternSize - i - 1);
  }

  for (let i = 0; i <= textSize - patternSize; i++) {
    // Compare hash values
    if (textHash === patternHash) {
      let found = true;
      for (let j = 0; j < patternSize; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Found the pattern at position i
      }
    }

    // Calculate hash for the next substring
    textHash = (textHash - text.charCodeAt(i) * Math.pow(prime, patternSize - 1)) * prime + text.
        charCodeAt(i + patternSize);
  }

  return -1; // Pattern not found
}
const text = "Hello, world!";
const pattern = "world";

const index = rabinKarpSearch(text, pattern);
console.log(index); // Output: 7
