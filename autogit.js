function rabinKarpSearch(text, pattern) {
  const prime = 101; // Prime number for rolling hash
  const textLen = text.length;
  const patternLen = pattern.length;
  const patternHash = hash(pattern);

  // Calculate the initial hash value of the text
  let textHash = hash(text.substr(0, patternLen));

  // Compare hash values and actual characters
  for (let i = 0; i <= textLen - patternLen; i++) {
    if (textHash === patternHash && text.substr(i, patternLen) === pattern) {
      return i; // Match found at index i
    }

    // Slide the substring by one character and recalculate the hash value
    textHash = calculateRollingHash(text, i, patternLen, textHash);
  }

  return -1; // No match found
}

function hash(str) {
  let hashValue = 0;
  const strLen = str.length;

  // Calculate the hash value using polynomial rolling hash
  for (let i = 0; i < strLen; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, strLen - i - 1);
  }

  return hashValue;
}

function calculateRollingHash(text, prevIndex, patternLen, prevHash) {
  const primePow = Math.pow(prime, patternLen - 1);
  
  // Remove the contribution of the previous character and add the contribution of the next character
  const newHash =
    (prevHash - text.charCodeAt(prevIndex) * primePow) * prime + text.charCodeAt(prevIndex + patternLen);

  return newHash;
}
const text = 'The quick brown fox jumps over the lazy dog';
const pattern = 'fox';

const index = rabinKarpSearch(text, pattern);
console.log(index); // Output: 16 (index where the pattern starts)
