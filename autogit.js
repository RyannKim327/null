function rabinKarp(pattern, text) {
  const patternLen = pattern.length;
  const textLen = text.length;
  const prime = 101; // a prime number

  // Calculate the hash of a string
  function hash(str, len) {
    let h = 0;
    for (let i = 0; i < len; i++) {
      h += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return h;
  }

  // Calculate the rolling hash of a string
  function rollingHash(prevHash, prevChar, newChar) {
    return (prevHash - prevChar.charCodeAt(0) + newChar.charCodeAt(0)) * prime;
  }

  const patternHash = hash(pattern, patternLen);
  let textHash = hash(text, patternLen);

  for (let i = 0; i <= textLen - patternLen; i++) {
    if (patternHash === textHash) {
      if (text.substring(i, i + patternLen) === pattern) {
        return i; // Match found, return the index
      }
    }
    if (i < textLen - patternLen) {
      // Calculate the new hash value for the next substring
      textHash = rollingHash(
        textHash,
        text[i].charCodeAt(0),
        text[i + patternLen].charCodeAt(0)
      );
    }
  }
  return -1; // No match found
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "brown";
const index = rabinKarp(pattern, text);
console.log(index); // Output: 10
