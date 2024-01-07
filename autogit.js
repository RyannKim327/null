function rabinKarpSearch(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;

  const prime = 101; // A prime number for the rolling hash function
  const primePower = Math.pow(prime, patternLength - 1);

  function calculateHash(str) {
    let hash = 0;
    for (let i = 0; i < patternLength; i++) {
      hash += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hash;
  }

  function recalculateHash(hash, droppedChar, addedChar) {
    hash = (hash - droppedChar) / prime;
    hash += addedChar * primePower;
    return hash;
  }

  const patternHash = calculateHash(pattern);
  let textHash = calculateHash(text.slice(0, patternLength));

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash && text.slice(i, i + patternLength) === pattern) {
      return i; // match found at position i
    }

    const droppedChar = text.charCodeAt(i);
    const addedChar = text.charCodeAt(i + patternLength);
    textHash = recalculateHash(textHash, droppedChar, addedChar);
  }

  return -1; // no match found
}

// Example usage
const text = 'ABABDABACDABABCABAB';
const pattern = 'ABABCABAB';
const matchIndex = rabinKarpSearch(pattern, text);
console.log(`Match found at index ${matchIndex}`);
