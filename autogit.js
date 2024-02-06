function rabinKarpSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const primeNumber = 101; // Choose a prime number for modulo operation
  const hashPattern = hash(pattern, patternLength, primeNumber);
  let hashText = hash(text, patternLength, primeNumber);

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (hashPattern === hashText) {
      if (text.substring(i, i + patternLength) === pattern) {
        return i; // Match found, return the starting index
      }
    }
    // Recalculate hash value for next substring
    if (i < textLength - patternLength) {
      hashText =
        ((hashText - text.charCodeAt(i) * Math.pow(primeNumber, patternLength - 1)) * primeNumber +
          text.charCodeAt(i + patternLength)) %
        primeNumber;
      if (hashText < 0) {
        hashText += primeNumber;
      }
    }
  }
  return -1; // Match not found
}

function hash(str, strLength, primeNumber) {
  let hashValue = 0;
  for (let i = 0; i < strLength; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(primeNumber, i);
  }
  return hashValue % primeNumber;
}

// Usage example
const text = 'ABCDEFGHIJK';
const pattern = 'DEF';
console.log(rabinKarpSearch(text, pattern)); // Output: 3 (index where the pattern 'DEF' starts)
