function rabinKarp(text, pattern) {
  const prime = 101; // prime number for the rolling hash function
  const patternLength = pattern.length;
  const textLength = text.length;
  const patternHash = calculateHash(pattern, patternLength);
  let windowHash = calculateHash(text, patternLength);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === windowHash && text.substring(i, i + patternLength) === pattern) {
      return i; // match found, return the index
    } else {
      // calculate the hash for the next window
      const nextCharCode = text.charCodeAt(i + patternLength);
      const prevCharCode = text.charCodeAt(i);
      windowHash = recalculateHash(windowHash, patternLength, prevCharCode, nextCharCode);
    }
  }

  return -1; // pattern not found
}

// Function to calculate the hash value of a string
function calculateHash(str, length) {
  let hash = 0;
  for (let i = 0; i < length; i++) {
    hash += str.charCodeAt(i) * Math.pow(prime, i);
  }
  return hash;
}

// Function to recalculate the hash value for the next window
function recalculateHash(oldHash, length, prevCharCode, nextCharCode) {
  let newHash = oldHash - prevCharCode;
  newHash = Math.floor(newHash / prime);
  newHash += nextCharCode * Math.pow(prime, length-1);
  return newHash;
}

// Example usage:
const text = 'Hello, how are you?';
const pattern = 'how';
const index = rabinKarp(text, pattern); // returns 7
console.log(index);
