function rabinKarp(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;
  const patternHash = getHash(pattern);

  for (let i = 0; i <= textLength - patternLength; i++) {
    const substring = text.substr(i, patternLength);
    const currentHash = getHash(substring);

    if (currentHash === patternHash && substring === pattern) {
      return i;
    }
  }

  return -1;
}

function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

// Example usage:
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "brown";
const index = rabinKarp(pattern, text);
console.log(index); // Output: 10
